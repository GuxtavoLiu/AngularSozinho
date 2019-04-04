import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { GustavoComponent } from './gustavo/gustavo.component';


@NgModule({
  declarations: [
    AppComponent,
    GustavoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
