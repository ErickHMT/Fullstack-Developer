import { Component, OnInit } from '@angular/core';
import { Pedido } from '../pedido';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-consulta',
  templateUrl: './pedido-consulta.component.html',
  styleUrls: ['./pedido-consulta.component.css']
})
export class PedidoConsultaComponent implements OnInit {

  pedidos: Pedido[] = [];

  constructor(
    private pedidoService: PedidoService,
  ) { }

  ngOnInit() {
    this.pedidoService.findAll().subscribe( data => {
      console.log('data: ', data);
      this.pedidos = data;
    });
  }
}
