import { removeBasket } from './../../state/baskets/baskets.actions';
import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Stores } from '../../state/stores';
import { Store } from '@ngrx/store';
import { BasketModel } from '../../models/basket-model';
import * as SearchAction from '../../state/searchs/searchs.actions'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  baskets:BasketModel[];
  baskets$:BasketModel[] = [];
  filter:string ="";
  constructor(private basketService:BasketService,private store:Store<Stores["baskets"]>,private storeFilter:Store<Stores["search"]>){
    this.store.select("baskets").subscribe(res=>
      this.baskets$ = res
      )
  }

  ngOnInit(): void {
  this.getAll();
  }

  getAll(){
    this.basketService.getAll(res=>
      this.baskets$=res)
  }
  search(){
    const filter = this.filter;
    this.storeFilter.dispatch(SearchAction.search({filter:filter}))
  }
  remove(id:string){
    this.basketService.remove(id);
  }
  clearSearch(){
    this.filter = '';
    this.search();
  }
 
}
