import { AppRoutingModule } from './app-routing.module';
import { ClienteService } from './cliente/cliente.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgSelectModule } from '@ng-select/ng-select';

import { AppComponent } from './app.component';
import { NavbarComponent } from './_navbar/navbar.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoConsultaComponent } from './pedido/pedido-consulta/pedido-consulta.component';
import { ProdutoService } from './produto/produto.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PedidoFormComponent,
    PedidoConsultaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
  ],
  providers: [
    ClienteService,
    ProdutoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
