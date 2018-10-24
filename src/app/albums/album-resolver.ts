
import {map, take} from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Album } from "../shared";
import { AlbumsService } from "./albums.service";

import { Observable } from 'rxjs';



@Injectable()
export class AlbumResolver implements Resolve<Album>{

    public constructor(private albumSvc: AlbumsService, private router: Router){}
       
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable <Album>{
        
        const id = route.paramMap.get('id');

        return this.albumSvc.getAlbum(id).pipe(take(1),map(album => {
            if(album){
                return album;
            }else{
                this.router.navigate(['../']);
                return null;
            }
        }),);
    }
}