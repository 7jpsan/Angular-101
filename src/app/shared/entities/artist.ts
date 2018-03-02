import { Image, DomainEntity } from "./";

export class Artist extends DomainEntity {
    
    id: string;
    name: string;
    type: string;
    images: Image[];
}
