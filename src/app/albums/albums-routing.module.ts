import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AlbumResolver } from './album-resolver';


const routes: Routes = [
  { 
    path: '' ,
    canActivate: [LoginGuard],
    children: [
      {
        path: '',
        redirectTo: 'latest',
        pathMatch: 'full'
      },
      {
        path: 'latest',
        component: AlbumListComponent
      },
      {
        path: 'user',
        component: AlbumListComponent
      },
      {
        path: 'album/:id',
        component: AlbumDetailsComponent,
        resolve: {
          album: AlbumResolver
        }
      },
      {
        path: 'artist/:id/albums',
        component: AlbumListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }