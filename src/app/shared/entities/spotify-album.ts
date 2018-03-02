import { SpotifyImage, SpotifyEntity } from "./";
import { SpotifyArtist } from "./spotify-artist";
import { Album } from "./album";


export class SpotifyAlbum extends SpotifyEntity<Album> {

    album_type: string;
    id: string;
    href: string;
    images: SpotifyImage[];
    artists: SpotifyArtist[];
    name: string;

    public constructor(album: SpotifyAlbum){
        super(album);
        this.images = album.images.map((x) => new SpotifyImage(x));
        this.artists = album.artists.map((x) => new SpotifyArtist(x));
    }
    
    public toDomainEntity(): Album{
        const album = new Album();
        album.apiRef = this.href;
        album.artists = this.artists.map((x) => x.toDomainEntity());
        album.images = this.images.map((x) => x.toDomainEntity());
        album.id = this.id;
        album.type = this.album_type;
        return album;
    }
}
