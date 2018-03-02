import { Image } from "./image";
import { DomainEntity } from "./domain-entity";

export class Artist extends DomainEntity {
    
    id: string;
    name: string;
    type: string;
    images: Image[];
}
