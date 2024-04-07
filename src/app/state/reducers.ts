import { BasketsReducer } from "./baskets/baskets.reducer";
import { SearchReducer } from "./searchs/searchs.reducer";

export const Reducers= {
    baskets:{"baskets":BasketsReducer},
    search:{"search":SearchReducer}
}