import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../shared/entities';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input()
  album: Album; 

  constructor() { }

  ngOnInit() {
    //console.log(JSON.stringify(this.album), this.album.id);
  }

}
