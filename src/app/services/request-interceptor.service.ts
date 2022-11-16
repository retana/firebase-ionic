
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const spotifyToken = sessionStorage.getItem('spotifyToken');
    let request = req;
    if(spotifyToken && req.url.includes('spotify') && !req.url.includes('token')){
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${ spotifyToken }`
        }
      });
    }
    return next.handle(request);
  }
}
