import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginGuard } from '../login.guard';

const routes: Routes = [
  { 
    path: 'home' ,
    canActivate: [LoginGuard],
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
