import { BasketModel } from './../../models/basket-model';
import { BasketService } from './../../services/basket.service';
import { ProductModel } from './../../models/product-model';
import { ProductService } from './../../services/product.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import * as BasketActions from '../../state/baskets/baskets.actions'
import { Store } from '@ngrx/store';
import { Stores } from '../../state/stores';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

products:ProductModel[]; 
baskets$:BasketModel[];
@ViewChild("productForm") productForm : NgForm;

@ViewChild("clsBtn") clsBtn:ElementRef;
constructor(private store:Store<Stores["baskets"]>,private productService:ProductService,private basketService:BasketService){
  this.store.select("baskets").subscribe(res=>
    this.baskets$ = res
    )
}
ngOnInit(): void {
  this.getBasket();
  this.getAll();
}
getAll(){
  this.productService.getAll(res=> {
    this.products =res;
  });
}
getBasket(){
  this.basketService.getAll(()=>{})
}
addCard(product:ProductModel){

  let currentbasket = this.baskets$.find(p => p.product.id === product.id);

  let basket:BasketModel;

  if(!currentbasket){
      basket = {
        id:uuidv4(),
        product:product,
        count: 1
    } 
    this.basketService.add(basket);
  }
  else{
    basket = {
      id:currentbasket.id,
      product:product,
      count: (currentbasket.count+1)
    } 
    this.basketService.update(basket);
  }
}

add(){
  if(this.productForm.valid ){
    const id = uuidv4();
    this.productForm.value.id =id;
    this.productService.add(this.productForm.value);
    this.clsBtn.nativeElement.click();
    const product :ProductModel = {
      id: id,
      name : this.productForm.value.name,
      price : this.productForm.value.price
    }
    this.products.push(product)
    this.productForm.reset();
  }
}

}
