import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from './login.guard';
import { AuthGuard } from './shared/spotify-auth/auth.guard';
import { SpotifyAuthComponent } from './shared/spotify-auth/spotify-auth/spotify-auth.component';
import { ProfileComponent } from './profile';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'authorized',
    canActivate: [ AuthGuard ],
    component: SpotifyAuthComponent
  },
  {
    path: 'public',
    loadChildren: 'app/public/public.module#PublicModule'
  },
  {
    path: 'home',
    canLoad: [ LoginGuard ],
    //canActivateChild: [ LoginGuard ],
    loadChildren: 'app/home/home.module#HomeModule' 
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ LoginGuard ]
  },
  {
    path: 'logout',
    redirectTo: 'home'
  },
  {
    path: '**',
    loadChildren: 'app/public/public.module#PublicModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
