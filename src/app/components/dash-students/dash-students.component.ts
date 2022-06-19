import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-students',
  templateUrl: './dash-students.component.html',
  styleUrls: ['./dash-students.component.css']
})
export class DashStudentsComponent implements OnInit {
  
  recruters:any[]=[];
  students:any[]=[];
  users:any[]=[]
  offersCount:number=0;
  constructor(private router :Router , 
    public auth: AuthService, public userService:UserService,public jobService:JobService) { }

  ngOnInit(): void {
    this.userService.getUserByRole("STUDENT").subscribe((response:any) => {
      this.students=response;
      console.log(response);
    })

    this.userService.getUserByRole("RECRUTER").subscribe((response:any) =>
    {
      this.recruters = response;
      
    })

    this.userService.getUserAllUsers().subscribe((response:any) =>
    {
      this.users = response;

    })

    this.jobService. listeJobs().subscribe((response:any) =>{
this.offersCount=response.length;
    })

  }

  deleteClient(id:number){
    this.userService.deleteUser(id).subscribe((response:any) => {
      this.students = this.students.filter(student => student.id != id);
    })
  }

}
