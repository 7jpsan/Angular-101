import { SpotifyImage } from "./spotify-image";
import { SpotifyEntity } from "./spotify-entity";
import { Artist } from "./artist";

export class SpotifyArtist extends SpotifyEntity<Artist>{
    
    id: string;
    name: string;
    type: string;
    images: SpotifyImage[];

    public constructor(artist: SpotifyArtist){
        super(artist);
        this.images =  !!artist.images ? artist.images.map((x) => new SpotifyImage(x)) : [];
    }

    public toDomainEntity(): Artist{
        const art = new Artist();
        art.apiRef = this.href;
        art.id = this.id;
        art.name = this.name;
        art.type = this.type;
        return art;
    }

}
