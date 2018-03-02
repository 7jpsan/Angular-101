import { DomainEntity } from "./domain-entity";

export abstract class SpotifyEntity<T extends DomainEntity>{

    href: string;

    constructor(obj: SpotifyEntity<T>) {
        Object.assign(this, obj);
    }

    abstract toDomainEntity(): T;
}
