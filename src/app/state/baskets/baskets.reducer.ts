import { createReducer, on } from "@ngrx/store";
import { BasketModel } from "../../models/basket-model";
import * as BasketActions from "./baskets.actions";




export const initialState: BasketModel[] = [];

export const BasketsReducer = createReducer(
    initialState,
    on(BasketActions.addBasket,(state,{basket})=>{
        return [...state, basket]
    }),
    on(BasketActions.updateBasket, (state, { basket }) => {
        return state.map(item => {
            if (item.id === basket.id) {
                return { ...item, ...basket };
            }
            return item; 
        });
    }),
    on(BasketActions.setBasket,(state,{baskets})=>{
        state = baskets;
        return state;
    }),

)
