import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public loggedUser: any; 
  public isloggedIn: Boolean = false;
  public role: string= ""; 
  public token:string="";
  url = environment.apiUrl
  private error = new Subject<number>();
  getError(){
    return this.error.asObservable();
  }
  constructor(private router: Router, private http:HttpClient) { }

logout() { 
  this.isloggedIn= false;
  this.loggedUser = undefined;
  this.role = "";
  localStorage.removeItem('loggedUser');
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.setItem('isloggedIn',String(this.isloggedIn));
  this.router.navigate(['/login']);
}

  SignIn(email:string, password:string){ 
    return this.http.post(this.url+"login",{ username:email, password:password}).subscribe((result:any) => {
      if(result["token"]){
        localStorage.setItem('token',result.token);
        localStorage.setItem('user',JSON.stringify(result.user));
        this.loggedUser=result.user;
        this.role=result.user.role;
        this.token=result.token;
        console.log(this.role);
        this.isloggedIn=true;
        setTimeout(()=>{
          this.logout();
        },3600000)
        if(result.user.role=="ADMIN"){
          this.router.navigate(['/dashbord'])
          return;
        }
        this.router.navigate(['/'])
      }

      },(err) => {
        console.log(err)
        this.error.next(1);
      });
  }

  register(form:any){
    let request = {firstName:form.nom, lastName:form.prenom, username:form.email, password:form.mdp, phone:form.telephone,address:form.address, role:form.role};
    console.log(request);
    return this.http.post(this.url+"register",request).subscribe((result:any) => {
      this.router.navigate(['/login']);
    })
  }

  updateUser(form:any){
    let user;
    console.log(this.loggedUser.id);
    user = new FormData()
    user.append("image",form["image"]);
    user.append("firstName",form["firstName"]);
    user.append("lastName",form["lastName"]);
    user.append("username",form["username"]);
    user.append("password",form["password"]);
    user.append("address",form["address"]);
    user.append("phone",form["phone"]);
    user.append("role",this.loggedUser["role"]);
    console.log(user.get("image"))
    return this.http.post(this.url+"user/"+this.loggedUser.id,user);
  }

  isAdmin():Boolean{
    if(this.loggedUser){
      if (this.loggedUser["role"]  == 'ADMIN')
      return true;
    }
    return false;
  }

  isRH():Boolean{
    if(this.loggedUser){

    if (this.loggedUser["role"] == 'RECRUTER') 
       return true;
    }
    return false;
    
  }

  isStudent():Boolean{
    if(this.loggedUser){
    if (this.loggedUser["role"] == 'STUDENT')
       return true;
    }
    return false;
   
  }

  autoAuthUser(){
    const authData = this.getAuthData();
    if(!authData){
      return;

    }
      this.token=authData.token;
      this.isloggedIn=true;
      this.loggedUser =authData.user? JSON.parse(authData.user):null;
      setTimeout(()=>{
        this.logout();
        },1800000)
       
  }

  private getAuthData(){
    const token = localStorage.getItem("token");
    const expirationDate = localStorage.getItem("expiration")
    const user =localStorage.getItem("user")
    if(!token) return null;
    return {token:token,user:user}
  }
}
