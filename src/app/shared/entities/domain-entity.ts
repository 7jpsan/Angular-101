export abstract class DomainEntity {
    apiRef: string;

    public constructor(obj?: DomainEntity){
        if(obj){
            Object.assign(this, obj);
        }
    }
}
