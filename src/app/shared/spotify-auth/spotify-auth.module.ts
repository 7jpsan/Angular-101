import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizeService } from './authorize.service';
import { LoginService } from './login.service';
import { SpotifyAuthRoutingModule } from './spotify-auth-routing.module';
import { AuthGuard } from './auth.guard';
import { SpotifyAuthComponent } from './spotify-auth/spotify-auth.component';

@NgModule({
  imports: [
    SpotifyAuthRoutingModule
  ],
  providers: [
  ],
  exports: [
  ],
  declarations: [SpotifyAuthComponent]
})
export class SpotifyAuthModule { 
  constructor (@Optional() @SkipSelf() parentModule: SpotifyAuthModule) {
    if (parentModule) {
      throw new Error(
        'SpotifyAuthModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SpotifyAuthModule,
      providers: [
        AuthorizeService,
        LoginService,
        AuthGuard
      ]
    };
  }
}
