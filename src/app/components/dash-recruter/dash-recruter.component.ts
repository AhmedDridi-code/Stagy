import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DashbordService } from 'src/app/services/dashbord.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-dash-recruter',
  templateUrl: './dash-recruter.component.html',
  styleUrls: ['./dash-recruter.component.css']
})
export class DashRecruterComponent implements OnInit {

  constructor( private router :Router, 
    public auth: AuthService, private jobService: JobService, private dashboardService: DashbordService) {
    }
    
  listNav=[true,false]
  ngOnInit(): void {
    if(this.dashboardService.url == "postulations"){

      this.listNav[0]=false
  
      this.listNav[1]=true

    }else{

      this.listNav[0]=true
  
      this.listNav[1]=false
      
    }
    console.log(this.dashboardService.url)
  }



  go(index:number,path:string) {

    for(let i=0;i<this.listNav.length;i++){
      this.listNav[i]=false;
    }

    this.listNav[index]=true
    this.router.navigate([path])

  }

  logout() {

    this.auth.logout();
   
  }
}
