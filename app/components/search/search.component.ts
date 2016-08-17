import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../services/spotify.service';
import { Artist } from '../../models/artist.model';
import { FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'search',
  providers: [SpotifyService, FormBuilder],
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES],
  templateUrl: 'search.component.html'
})
export class SearchComponent implements OnInit {
  search: string;
  searchForm: FormGroup;
  results: Artist[];
  results$: Observable<any>;

  constructor(
    private spotifyService: SpotifyService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      'search': ['', Validators.required]
    });

    this.results$ = this.searchForm.controls['search'].valueChanges
      .switchMap(query => this.spotifyService.getAll(query))
      .map(res => console.log(res));
  }

  ngOnInit() { }
 
  /*searchNow() {
    this.spotifyService.getAll(this.search)
      .subscribe(res => {
        this.results = res.artists.items;
      });
  }*/

}