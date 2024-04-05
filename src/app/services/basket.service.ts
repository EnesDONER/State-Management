import { Stores } from './../state/stores';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasketModel } from '../models/basket-model';
import { Store } from '@ngrx/store';
import * as BasketActions from '../state/baskets/baskets.actions'

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  api : string =  "http://localhost:3000/basket"
  constructor(private _http :HttpClient,private store :Store<Stores["baskets"]>) { }
  
  getAll(callBack: (res: BasketModel[]) => void) {
    this._http.get(this.api).subscribe(res =>{
      callBack(res as BasketModel[]);
    });
  }

  add(basket:BasketModel){
    this._http.post(this.api,basket).subscribe(res=>{
      this.store.dispatch(BasketActions.addBasket({basket:basket}));
    });
  }
  update(basket:BasketModel){
    const newApi = this.api+'/'+basket.id
    this._http.put(newApi,basket).subscribe(res=>this.store.dispatch(BasketActions.updateBasket({basket:basket})));
  }
}
