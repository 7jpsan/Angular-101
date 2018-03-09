import { Image } from './image';
import { DomainEntity } from './domain-entity';

export class User extends DomainEntity{

    public name: string = '';
    public token: string = '';
    public birthday: string = '';
    public email: string = '';
    public product: string = '';
    public profilePic: Image = {} as Image;
    public apiRef: string = '';

    private loggedIn: boolean = false;

    public get isLoggedIn(): boolean{
        return this.loggedIn;
    }

    public setLoggedIn(value: boolean){
        this.loggedIn = value;
    }

    public get isPremium(): boolean{
        return this.product === 'premium';
    }

}
