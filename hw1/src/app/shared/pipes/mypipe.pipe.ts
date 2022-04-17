import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Products } from 'src/assets/products';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(items: Products[], category: string): Products[] {
    if (!category || !items) 
      return items;
    
    let result = [];
    for (let item of items) {
      if (item.category === category) {
        result.push(item);
      }
    }
    return result;
  }

}
