import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
