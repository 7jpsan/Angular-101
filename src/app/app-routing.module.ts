import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LoginGuard } from './login.guard';
import { AuthGuard } from './shared/spotify-auth/auth.guard';
import { SpotifyAuthComponent } from './shared/spotify-auth/spotify-auth/spotify-auth.component';
import { ProfileComponent } from './profile';
import { PublicModule } from './public/public.module';
import { HomeModule } from './home/home.module';
import { SpotifyAuthModule } from './shared/spotify-auth/spotify-auth.module';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './albums/album/album.component';
import { AlbumsModule } from './albums/albums.module';
import { AlbumsRoutingModule } from './albums/albums-routing.module';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumResolver } from './albums/album-resolver';

// NO more lazy loading module bloody angular!
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'albums',
    loadChildren: './albums/albums.module#AlbumsModule'
    // loadChildren: () => AlbumsModule
  },
  {
    path: 'authorized',
    canActivate: [ AuthGuard ],
    component: SpotifyAuthComponent
  },
  {
    path: 'home',
    canActivate: [LoginGuard],
    component: HomeComponent
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
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
