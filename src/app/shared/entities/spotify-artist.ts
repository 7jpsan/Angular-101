import { SpotifyEntity, SpotifyImage } from "../shared";
import { Artist } from "./artist";

export class SpotifyArtist extends SpotifyEntity<Artist>{
    
    id: string;
    name: string;
    type: string;
    images: SpotifyImage[];

    public constructor(obj: SpotifyArtist){
        super(obj);
        this.images = obj.images.map((img) => new SpotifyImage(img));
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
