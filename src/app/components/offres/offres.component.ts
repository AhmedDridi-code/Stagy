import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DashbordService } from 'src/app/services/dashbord.service';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(public jobService:JobService, private authService:AuthService,public dashboardService: DashbordService,
     public router:Router, public userService:UserService) { }
  offres:any[]=[]
  postulations:any[]=[]
  recruters:any[]=[];
  students:any[]=[];
  users:any[]=[]
  ngOnInit(): void {
    this.dashboardService.url="offres"
    this.jobService.listeMyJobs().subscribe((jobs:any)=> {
      this.offres=jobs;
    })

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
    
  }
  closeOffre(id:number){
    this.jobService.changeJob(id).subscribe((job:any)=>{
      let offre = this.offres.find(( offre=>offre.id == id ))
      let index = this.offres.indexOf(offre);
      this.offres[index]=job;
    })
  }
  filter(){
    this.router.navigate(['/dashbordRecruter/offre'])
  }


}
