import { Image, DomainEntity } from "./";
import { Artist } from "./artist";

export class Album extends DomainEntity{

    id: string;
    images: Image[];
    type: string;
    artists: Artist[];
    apiRef: string;
}
