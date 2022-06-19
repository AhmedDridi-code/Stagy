import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-rectuters',
  templateUrl: './dash-rectuters.component.html',
  styleUrls: ['./dash-rectuters.component.css']
})
export class DashRectutersComponent implements OnInit {
  recruters:any[]=[];
  students:any[]=[];
  users:any[]=[]
  offersCount:number=0;
  constructor(private router :Router , 
    public auth: AuthService, public userService:UserService, public jobService: JobService) { }

  ngOnInit(): void {
    this.userService.getUserByRole("RECRUTER").subscribe((response:any) => {
      this.recruters=response;
      console.log(response);
    })

    this.userService.getUserByRole("STUDENT").subscribe((response:any) =>
    {
      this.students = response

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
      console.log(response);
      this.recruters = this.recruters.filter(recruter => recruter.id != id);
    })
  }

}