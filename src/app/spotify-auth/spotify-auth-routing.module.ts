import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { SpotifyAuthComponent } from './spotify-auth/spotify-auth.component';

const routes: Routes = [
  { 
    path: '' ,
    component: SpotifyAuthComponent,
    canActivate: [ AuthGuard ]
  } 
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SpotifyAuthRoutingModule { }
