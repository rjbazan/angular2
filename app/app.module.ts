import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { appRouterProviders } from './app.routes';
import { SearchComponent } from '../app/components/search/search.component';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { AboutComponent } from '../app/components/about/about.component';
import { ArtistComponent } from '../app/components/artist/artist.component';
import { SpotifyService } from '../app/components/services/spotify.service'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, SearchComponent, AboutComponent, ArtistComponent],
  providers: [appRouterProviders, HTTP_PROVIDERS/*, disableDeprecatedForms(), provideForms()*/, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
