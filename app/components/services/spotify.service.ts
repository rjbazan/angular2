import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(private http: Http) { }
  getAll(input :string) {
    return this.http.get('https://api.spotify.com/v1/search?q=' + input + '&type=artist')
      .map((res: Response) => (res.json()));
  }

  GetArtist(id :string) {
    return this.http.get('https://api.spotify.com/v1/artists/' + id)
      .map((res: Response) => (res.json()));
  }

}