import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GooglePlaceComponent } from './google-place/google-place.component';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    GooglePlaceComponent
  ],
  imports: [
    BrowserModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: 'API KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
