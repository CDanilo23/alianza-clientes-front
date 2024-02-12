import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {applyPolyfills, defineCustomElements} from "h8k-components/loader";
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  applyPolyfills()
  .then(() => {
    defineCustomElements()
  })
