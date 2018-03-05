import { User } from './user';
import { SpotifyImage } from './spotify-image';
import { SpotifyEntity } from './spotify-entity';

export class SpotifyUser extends SpotifyEntity<User> {
  display_name: string;
  email: string;
  id: string;
  birthdate: string;
  product: string;
  images: SpotifyImage[];

  public constructor(user: SpotifyUser){
    super(user);
    this.images = !!user.images ? user.images.map((x) => new SpotifyImage(x)) : [];
  }

  public toDomainEntity(): User{
    
    const user = new User();
    
    //user.isLoggedIn = true;
    user.name = this.display_name || this.id || this.email;
    user.birthday = this.birthdate;
    user.email = this.email;
    user.product = this.product;
    user.profilePic = this.images.length > 0 ? this.images[0].toDomainEntity() : null;
    user.apiRef = this.href;

    return user;
  }
}
