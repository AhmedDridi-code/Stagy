import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {
  users:any[]=[]
  services:any[]=[]
  studentCount:number=0;
  recruterCount:number=0;
  offersCount:number=0;
  constructor(private router :Router, 
    public auth: AuthService, private userService: UserService, private jobService: JobService) { }

  ngOnInit(): void {
    this.userService.getUserByRole("STUDENT").subscribe((response:any) =>
      {
        let students = response
        this.studentCount = students.length;

      })
      this.userService.getUserByRole("RECRUTER").subscribe((response:any) =>
      {
        let recruters = response;
        this.recruterCount = recruters.length;
        

      })
      this.userService.getUserAllUsers().subscribe((response:any) =>
      {
        this.users = response;

      })

      this.jobService. listeJobs().subscribe((response:any) =>{
this.offersCount=response.length;
      })
  }

}
