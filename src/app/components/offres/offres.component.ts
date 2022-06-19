import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DashbordService } from 'src/app/services/dashbord.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  constructor(public jobService:JobService, private authService:AuthService,public dashboardService: DashbordService, public router:Router) { }
  offres:any[]=[]
  ngOnInit(): void {
    this.dashboardService.url="offres"
    this.jobService.listeMyJobs().subscribe((jobs:any)=> {
      this.offres=jobs;
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
