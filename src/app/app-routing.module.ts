import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashContactComponent } from './components/dash-contact/dash-contact.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashEtudiantComponent } from './components/dash-etudiant/dash-etudiant.component';
import { DashRecruterComponent } from './components/dash-recruter/dash-recruter.component';
import { DashRectutersComponent } from './components/dash-rectuters/dash-rectuters.component';
import { DashStudentsComponent } from './components/dash-students/dash-students.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { DashhomeComponent } from './components/dashhome/dashhome.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OffresComponent } from './components/offres/offres.component';
import { PostulationsComponent } from './components/postulations/postulations.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { CvComponent } from './components/cv/cv.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "login" , component : LoginComponent},
  {path : "signup" , component : SignupComponent},
  {path : "contact" , component : ContactComponent},
  {path : "addOffre" , component : AddOffreComponent},
  {path : "myPostulations" , component : DashEtudiantComponent},
  {path : "profile" , component : ProfileComponent},
  {path : "editProfile" , component : EditProfileComponent},
  {path : "cv" , component : CvComponent},
  {path : "dashbord" , component : DashbordComponent, children: [
    {path:"",component: DashhomeComponent},
    {path:"students",component:DashStudentsComponent },
    {path:"recruters",component:DashRectutersComponent },
    {path:"contact",component:DashContactComponent },
  ]},
  {path : "dashbordRecruter" , component : DashRecruterComponent, children: [
    {path:"",component: DashRecruterComponent},
    {path:"offres",component:OffresComponent },
    {path:"postulations",component:PostulationsComponent },
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
