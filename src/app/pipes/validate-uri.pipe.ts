import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'validateUri'
})
export class ValidateUriPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer){}
  transform(value: string): any {
    console.log(value);
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }
}
