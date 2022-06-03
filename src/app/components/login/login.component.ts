import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erreur =0;
  invalid=false;
  connexion = new FormGroup({
    email: new FormControl('',[Validators.required]),
    mdp: new FormControl('',[Validators.required]),

  });

  
  constructor( private auth : AuthService, 
    public router: Router) { }

  ngOnInit(): void {
    this.auth.getError().subscribe((result)=>{
      this.erreur=result;
    })
  }

  onLoggedin()
  {
    
    if(this.connexion.valid) {
      console.log("email: "+this.connexion.value.email );
      console.log("password: "+this.connexion.value.mdp );
      this.auth.SignIn(this.connexion.value.email, this.connexion.value.mdp)
    }else{
      this.invalid=true;
    }

      }
}
