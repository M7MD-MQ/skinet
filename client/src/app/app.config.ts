import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//import { provideBootstrapComponents } from 'ngx-bootstrap';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    // BrowserAnimationsModule(),
    // provideBootstrapComponents() // Adding ngx-bootstrap

  ],
};
