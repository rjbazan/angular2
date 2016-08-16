import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../services/spotify.service';
import { Artist } from '../../models/artist.model'

@Component({
  moduleId: module.id,
  selector: 'search',
  providers: [SpotifyService],
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() { }
  search: string;
  results: Artist[];
  searchNow() {
    this.spotifyService.getAll(this.search)
      .subscribe(res => {
        this.results = res.artists.items;
      });
  }

}