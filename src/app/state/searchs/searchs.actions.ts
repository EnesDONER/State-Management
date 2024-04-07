import { createAction, props } from "@ngrx/store";

export const search = createAction(
    "[Product Component] Search", props<{"filter":string}>()
    ) 
    