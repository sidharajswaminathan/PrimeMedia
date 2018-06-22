import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchResultTxt: string): any[] {
    if(!items) return [];
    if(!searchResultTxt) return items;
    searchResultTxt = searchResultTxt.toLowerCase();
    return items.filter( it => {
       return it.categoryTitle.toLowerCase().includes(searchResultTxt);
    });
  }
}
