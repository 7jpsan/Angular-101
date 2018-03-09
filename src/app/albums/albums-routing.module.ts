import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, Route } from '@angular/router';
import { LoginGuard } from '../login.guard';
import { AlbumComponent } from './album/album.component';
import { AlbumListComponent } from './album-list/album-list.component';


const routes: Routes = [
  { 
    path: '' ,
    canActivate: [LoginGuard],
    component: AlbumListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }