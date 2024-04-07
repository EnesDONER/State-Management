import { BasketModel } from "../models/basket-model";

export interface Stores{
    baskets:{"baskets":BasketModel[]},
    search:{"search":string}

}