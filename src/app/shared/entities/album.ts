import { Image } from "./image";
import { DomainEntity } from "./domain-entity";
import { Artist } from "./artist";

export class Album extends DomainEntity{

    name: string;
    id: string;
    images: Image[];
    type: string;
    artists: Artist[];
    apiRef: string;
}
