import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ContactService } from 'src/app/services/contact.service';
import { JobService } from 'src/app/services/job.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-contact',
  templateUrl: './dash-contact.component.html',
  styleUrls: ['./dash-contact.component.css']
})
export class DashContactComponent implements OnInit {

  recruters:any[]=[];
  students:any[]=[];
  contacts:any[]=[];
  users:any[]=[]
  offersCount:number=0;
  constructor(private router :Router , 
    public auth: AuthService, public userService:UserService,public jobService:JobService,
    public contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getContact().subscribe((response:any) =>{
      this.contacts = response; 
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

  deleteContact(id:number){
    this.contactService.deleteContact(id).subscribe((response:any) => {
      this.contacts = this.contacts.filter(contact => contact.id != id);
    })
  }

}
