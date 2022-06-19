import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { DashbordComponent } from './components/dashbord/dashbord.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthService } from './services/auth.service';
import {MatCardModule} from '@angular/material/card';
import { AuthInterceptor } from './auth.interceptor';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { DashhomeComponent } from './components/dashhome/dashhome.component';
import { DashStudentsComponent } from './components/dash-students/dash-students.component';
import { DashRectutersComponent } from './components/dash-rectuters/dash-rectuters.component';
import { PopupComponent } from './components/popup/popup.component';
import { DashRecruterComponent } from './components/dash-recruter/dash-recruter.component';
import { PostulationsComponent } from './components/postulations/postulations.component';
import { OffresComponent } from './components/offres/offres.component';
import { DashEtudiantComponent } from './components/dash-etudiant/dash-etudiant.component';
import { SearchNamePipe } from './pipes/search-name.pipe';
import { SearchPostPipe } from './pipes/search-post.pipe';
import { SearchOfferPipe } from './pipes/search-offer.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FooterComponent } from './components/footer/footer.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { DashContactComponent } from './comonents/dash-contact/dash-contact.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './components/cv/cv.component';
import { SearchOffreByPipe } from './pipes/search-offre-by.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilterPipe,
    LoginComponent,
    SignupComponent,
    DashbordComponent,
    ContactComponent,
    AddOffreComponent,
    DashhomeComponent,
    DashStudentsComponent,
    DashRectutersComponent,
    PopupComponent,
    DashRecruterComponent,
    PostulationsComponent,
    OffresComponent,
    DashEtudiantComponent,
    SearchNamePipe,
    SearchPostPipe,
    SearchOfferPipe,
    ProfileComponent,
    FooterComponent,
    SearchByNamePipe,
    DashContactComponent,
    EditProfileComponent,
    CvComponent,
    SearchOffreByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    ScrollingModule,
    FormsModule,
    NgxExtendedPdfViewerModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
