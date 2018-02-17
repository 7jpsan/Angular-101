import { User } from './user';

export class SpotifyUser {
  display_name: string;
  email: string;
  id: string;
  birthdate: string;
  product: string;
  images: any[];

  public static toUser(spUser: SpotifyUser): User{
    
    const user = new User({} as User);
    
    user.isLoggedIn = true;
    user.name = spUser.display_name || spUser.id || spUser.email;
    user.birthday = spUser.birthdate;
    user.email = spUser.email;
    user.product = spUser.product;
    user.profilePic = spUser.images ? spUser.images[0].url : null;

    return user;
  }
}
