import {Image, ImageSize} from "./image";
import { SpotifyEntity } from "./spotify-entity";

export class SpotifyImage extends SpotifyEntity<Image>{
    
    url: string;
    height: number;
    width: number;

    public toDomainEntity(): Image{
        const image = new Image();

        image.width = this.width;
        image.height = this.height;
        image.url = this.url;
        image.apiRef = this.href;

        return image;
    }
}