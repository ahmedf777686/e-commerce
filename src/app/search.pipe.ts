import { Pipe, PipeTransform } from '@angular/core';
import { Test } from './test';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products:any[],search:any): any[] {
   return products.filter((pro)=>pro.title.includes(search))
  }

}
