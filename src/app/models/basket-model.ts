import { ProductModel } from "./product-model";

export interface BasketModel{
    id:string,
    product:ProductModel,
    count:number
}