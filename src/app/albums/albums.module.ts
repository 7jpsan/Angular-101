import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumsService } from './albums.service';

@NgModule({
  imports: [
    CommonModule,
    AlbumsRoutingModule,
  ],
  declarations: [AlbumComponent, AlbumListComponent],
  providers: [AlbumsService]
})
export class AlbumsModule { }
