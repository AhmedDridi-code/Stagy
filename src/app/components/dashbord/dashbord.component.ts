import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { ServiceService } from 'src/app/services/service.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  listNav=[true,false,false,false]
  users:any[]=[]
  services:any[]=[]
  studentCount:number=0;
  recruterCount:number=0;
  offersCount:number=0;
  constructor(private router :Router, 
    public auth: AuthService, private userService: UserService, private jobService: JobService) { }

  ngOnInit(): void {
    this.userService.getUserAllUsers().subscribe((response:any) =>
      {
  this.users=response;
        let students = this.users.filter(user => user.role ==="STUDENT");
        this.studentCount = students? students.length : 0;
        let recruters = this.users.filter(user => user.role ==="RECRUTER");
        this.recruterCount = recruters? recruters.length : 0;
      })

      this.jobService. listeJobs().subscribe((response:any) =>{
this.offersCount=response.length;
      })
  }

logout() {
  this.auth.logout();
 
}

go(index:number,path:string) {
  for(let i=0;i<this.listNav.length;i++){
    this.listNav[i]=false;
  }
  this.listNav[index]=true
  this.router.navigate([path])
}

}
