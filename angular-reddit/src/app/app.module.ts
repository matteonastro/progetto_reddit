import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizzaComponent } from './visualizza/visualizza.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizzaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

