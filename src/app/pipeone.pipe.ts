import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeone'
})
export class PipeonePipe implements PipeTransform {

  transform(text:string): string {
    return text.split(' ',1).join(' ');
  }

}
