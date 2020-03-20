import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AkComponent } from './ak/ak.component';
import { PatientComponent } from './patient/patient.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dash',component:DashboardComponent},
  {path:'ak',component:AkComponent},
  {path: 'patient', component: PatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
