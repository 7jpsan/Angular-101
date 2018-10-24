import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Album } from '../../shared';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {


  public album: Album;

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe((data: { album: Album }) => {
      this.album = data.album;
    });
  }

}
