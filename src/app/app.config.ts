import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { HttpClientModule} from '@angular/common/http';
import { Reducers } from './state/reducers';
import { BasketsReducer } from './state/baskets/baskets.reducer';
import { SearchReducer } from './state/searchs/searchs.reducer';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(),
    importProvidersFrom(HttpClientModule,
      StoreModule.forRoot({"baskets":BasketsReducer, "search":SearchReducer }))]
};
