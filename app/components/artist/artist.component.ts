import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../services/spotify.service';
import { Artist } from '../../models/artist.model'
import { Album } from '../../models/album.model'
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'artist',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'artist.component.html'
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist;
  albums: Album[];
  constructor(
    private spotifyService: SpotifyService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.spotifyService.GetArtist(id)
          .subscribe(artist => {console.log(artist)
            this.artist = artist;
          });
      });

  }

}