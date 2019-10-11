import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Cliente } from 'src/app/cliente/cliente';
import { Produto } from 'src/app/produto/produto';
import { ProdutoService } from 'src/app/produto/produto.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  clientes : Cliente[] = [];
  produtos : Produto[] = [];

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService
    ) { }

  ngOnInit() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data['clientes'];
    })

    this.produtoService.findAll().subscribe(data => {
      this.produtos = data['produtos'];
    })
  }

  finalizarPedido() {
    alert('finalizar');
  }
}
