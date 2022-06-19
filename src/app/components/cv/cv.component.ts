import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CvServiceService } from 'src/app/services/cv-service.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  
  constructor(public cvService: CvServiceService) { }

  ngOnInit(): void {
    console.log();
  }

}
