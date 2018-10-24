import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../../shared';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  public albums: Album[];

  constructor(private albumSvc: AlbumsService, private route: ActivatedRoute) { 
    this.albums = [];
  }
  
  ngOnInit() {
    
      this.route.url.subscribe(x => { 
        if(x[0].path === 'latest'){
          this.albumSvc.lookupAlbums().subscribe((albums: Album[]) => {
            this.albums = albums || [];
          });
        }else if(x[0].path === 'user'){
          this.albumSvc.getUsersAlbums().subscribe((albums: Album[]) => {
            this.albums = albums || [];
          });
        }else{
          this.albumSvc.getArtistAlbums(x[1].path).subscribe((albums: Album[]) => {
            this.albums = albums || [];
          });
        }
      })
  }

}
