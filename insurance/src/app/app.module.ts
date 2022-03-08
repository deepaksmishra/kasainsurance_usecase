import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavdashComponent } from './navdash/navdash.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaynowComponent } from './paynow/paynow.component';
import { PgpolicyComponent } from './pgpolicy/pgpolicy.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';


//HttpClient for API
import { HttpClientModule } from '@angular/common/http';


//import the below modules

import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent,
    NavdashComponent,
    ViewpolicyComponent,
    SidebarComponent,
    PaynowComponent,
    PgpolicyComponent,
    UserRegistrationComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
