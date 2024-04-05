import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  api : string =  "http://localhost:3000/product"
  constructor(private _http :HttpClient) { }

  getAll(callBack: (res: ProductModel[]) => void) {
    this._http.get(this.api).subscribe(res => callBack(res as ProductModel[]));
  }

  add(product:ProductModel){
    this._http.post(this.api,product).subscribe();
  }

  
}
