import { DomainEntity } from "./domain-entity";

export enum ImageSize{
    Small,
    Medium,
    Large
}

export class Image extends DomainEntity{
    
    public url: string;
    public height: number;
    public width: number;

    public constructor(img?: Image){
        super(img);
    }
    
    public get size(): ImageSize{
        const dim = Math.max(this.height, this.width);
        let size = ImageSize.Large;
        if (dim <= 64){
            size = ImageSize.Small;
        }else if (dim <= 300){
            size = ImageSize.Medium;
        }
        return size;
    }
}
