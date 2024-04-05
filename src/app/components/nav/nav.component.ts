import { BasketService } from './../../services/basket.service';
import { Component, OnInit } from '@angular/core';
import { Stores } from '../../state/stores';
import { Store } from '@ngrx/store';
import { BasketModel } from '../../models/basket-model';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  baskets:BasketModel[];
  baskets$:BasketModel[] = [];
  constructor(private basketService:BasketService,private store:Store<Stores["baskets"]>){
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

}
