import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CvServiceService } from 'src/app/services/cv-service.service';
import { DashbordService } from 'src/app/services/dashbord.service';
import { JobService } from 'src/app/services/job.service';
import { PostulationService } from 'src/app/services/postulation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-etudiant',
  templateUrl: './dash-etudiant.component.html',
  styleUrls: ['./dash-etudiant.component.css']
})
export class DashEtudiantComponent implements OnInit {
  postulations:any[]=[]
  recruters:any[]=[];
  students:any[]=[];
  users:any[]=[]
  offersCount:number=0;
  constructor( private router :Router, 
    public auth: AuthService, private jobService: JobService, 
    private dashboardService: DashbordService, public postulationService:PostulationService,
    public cvService: CvServiceService, public userService:UserService) {

    }

  ngOnInit(): void {
    this.dashboardService.url="postulations"
    this.postulationService.getPostulationByEtuddiantId().subscribe((result:any)=>{
      this.postulations = result;
      console.log(result);
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

  this.jobService. listeJobs().subscribe((response:any) =>{
this.offersCount=response.length;
  })
}

  logout() {

    this.auth.logout();
   
  }

  preview(cv:any){
    this.cvService.cv=cv;
    this.router.navigate(["/cv"]);
  
  }

}
