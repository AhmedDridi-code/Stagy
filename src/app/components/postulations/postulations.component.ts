import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CvServiceService } from 'src/app/services/cv-service.service';
import { DashbordService } from 'src/app/services/dashbord.service';
import { PostulationService } from 'src/app/services/postulation.service';
import { CvComponent } from '../cv/cv.component';


@Component({
  selector: 'app-postulations',
  templateUrl: './postulations.component.html',
  styleUrls: ['./postulations.component.css']
})
export class PostulationsComponent implements OnInit {

  postulations:any[]=[];
  test="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

  constructor(public postulationService:PostulationService, public auth: AuthService, 
    public dashboardService: DashbordService, public dialog: MatDialog,
    public cvService: CvServiceService, public router : Router) { }

  ngOnInit(): void {
    this.dashboardService.url="postulations"
    this.postulationService.getPostulationByOffreUser(this.auth.loggedUser.id).subscribe((result:any)=>{
      this.postulations = result;
      console.log(result);
    })
    
  }
  preview(cv:any){
    this.cvService.cv=cv;
    this.router.navigate(["/cv"]);
  }
  filter(){
    this.router.navigate(['/dashbordRecruter/postulations'])
  }

  accept(id:number){
    this.postulationService.acceptPostulation(id).subscribe((result)=>{
        console.log(result);
        let postulation = this.postulations.find(el=> el.id === id);
        let index = this.postulations.indexOf(postulation);
        this.postulations[index] = result;
    })
  }
}
