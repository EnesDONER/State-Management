import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule, provideStore } from '@ngrx/store';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { Reducers } from './state/reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(),
    importProvidersFrom(HttpClientModule,
      StoreModule.forRoot(Reducers.baskets))]
};
