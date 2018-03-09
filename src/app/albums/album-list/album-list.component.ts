import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../../shared';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  public albums: Album[];

  constructor(private albumSvc: AlbumsService) { 
    this.albums = [];
  }
  
  ngOnInit() {
    this.albumSvc.lookupAlbums().subscribe((albums: Album[]) => {
      this.albums = albums || [];
    });
  }

}
