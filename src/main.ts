import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

AngularFireModule.initializeApp(environment.firebaseConfig);

if (environment.production) {
  enableProdMode();
 
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
