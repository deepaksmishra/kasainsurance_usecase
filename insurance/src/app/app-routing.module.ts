import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NavdashComponent } from './navdash/navdash.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';

const routes: Routes = [{'path': '', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'login', component: LoginComponent},
{'path': 'register', component: RegisterComponent},
{'path': 'dashboard', component: DashboardComponent},
{'path': 'viewpolicy', component: ViewpolicyComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
