/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { map } from '@firebase/util';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  clientId = '';
  clientSecret = '';
  private accessToken?: string;
  private BASE_URL_API = 'https://api.spotify.com/v1/';

  constructor(private http: HttpClient,
    domSanitizer: DomSanitizer) {}

  getToken(){
  const params = new HttpParams({
      fromObject: {
        grant_type: 'client_credentials',
        client_id: '38e3758942da4490bdf20bddee97e929',
        client_secret: 'e733b825499941e7a3b65fd55e6022ba',
      },
      encoder: new HttpUrlEncodingCodec()
    });
    return this.http.post('https://accounts.spotify.com/api/token', params, {headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }}).pipe(switchMap( (response: any) => {
      this.accessToken = response.access_token;
      sessionStorage.setItem('spotifyToken', this.accessToken);
      return of(response);
    }));
  }

  getPlayList(): Promise<any>{
    return this.http.get(this.BASE_URL_API+'browse/featured-playlists').toPromise();
  }
  getTracks(url): Promise<any> {
    return this.http.get(url).toPromise();
  }
}
