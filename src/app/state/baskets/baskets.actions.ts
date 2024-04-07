import { BasketModel } from './../../models/basket-model';
import { createAction, props } from "@ngrx/store";

export const addBasket = createAction(
    "[Basket] Add Basket", props<{"basket":BasketModel}>()
    ) 
export const updateBasket = createAction(
    "[Basket] Update Basket", props<{"basket":BasketModel}>()
    ) 
export const setBasket = createAction(
    "[Basket] Set Basket", props<{"baskets":BasketModel[]}>()
    ) 
export const removeBasket = createAction(
    "[Basket] Remove Basket", props<{"id":string}>()
    ) 
    
