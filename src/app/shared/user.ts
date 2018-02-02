export class User {


    public name: string = '';
    public token: string = '';
    public birthday: string = '';
    public email: string = '';
    public product: string = '';

    private loggedIn: boolean = false;

    public constructor(user: User){
        Object.assign(this, user);
    }

    public get isLoggedIn(): boolean{
        return this.loggedIn;
    }

    public set isLoggedIn(value: boolean){
        this.loggedIn = value;
    }

    public get isPremium(): boolean{
        return this.product === 'premium';
    }

}
