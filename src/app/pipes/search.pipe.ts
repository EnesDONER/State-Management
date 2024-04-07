import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: ProductModel[],filter: string ): ProductModel[] {

    return filter ? products.filter(p => 
        p.name.toLowerCase().includes(filter.toLocaleLowerCase()) || 
        p.price.toString().includes(filter)
      )  : products; 
  }

}
