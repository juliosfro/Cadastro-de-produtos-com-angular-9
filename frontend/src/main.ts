import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* Abaixo esta chamando o modulo que vai inicializar nossa aplicacao. */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
