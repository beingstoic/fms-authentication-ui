import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LoginComponent } from './pages/login/login.component';
import {AdminComponent} from './pages/admin/admin.component';
import {CoordinatorComponent} from './pages/coordinator/coordinator.component';
import {ParticipantComponent} from './pages/participant/participant.component'
import { AdminGuard } from './_helper/admin.guard';
import { CoordinatorGuard } from './_helper/coordinator.guard';
import { ParticipantGuard } from './_helper/participant.guard';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  {path:'admin',
    component:AdminComponent,
    canActivate: [AdminGuard] },
  {path:'customer',
  component:CoordinatorComponent,
  canActivate: [CoordinatorGuard]},
  {path:'participant',
   component:ParticipantComponent,
  canActivate:[ParticipantGuard]}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
