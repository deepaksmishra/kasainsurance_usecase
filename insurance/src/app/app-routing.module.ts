import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NavdashComponent } from './navdash/navdash.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaynowComponent } from './paynow/paynow.component';
import{PgpolicyComponent} from './pgpolicy/pgpolicy.component';
import { ApplynewComponent } from './applynew/applynew.component';

const routes: Routes = [{'path': '', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'login', component: LoginComponent},
{'path': 'register', component: RegisterComponent},
{'path': 'dashboard', component: DashboardComponent},
{'path': 'viewpolicy', component: ViewpolicyComponent},
{'path': 'sidebar', component: SidebarComponent},
{'path': 'paynow', component: PaynowComponent},
{'path': 'pgpolicy', component: PgpolicyComponent},
{'path': 'applynew', component: ApplynewComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
