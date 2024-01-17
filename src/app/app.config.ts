import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { userEffects } from './redux/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(), provideRouter(routes), provideClientHydration(), { provide: DataService }, provideStore(reducers, { metaReducers }), provideEffects()]
};
