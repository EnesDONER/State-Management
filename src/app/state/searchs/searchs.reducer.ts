import { createReducer, on } from "@ngrx/store";
import * as SearchActions from './searchs.actions'

export const initialState: string = "";

export const SearchReducer = createReducer(
    initialState,
    on(SearchActions.search, (state, { filter }) =>{ 
        
         state = filter
         return state;
    } )
)
