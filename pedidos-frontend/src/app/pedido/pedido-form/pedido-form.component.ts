import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Cliente } from 'src/app/cliente/cliente';
import { Produto } from 'src/app/produto/produto';
import { ProdutoService } from 'src/app/produto/produto.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  isclienteSelecionado: false;

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    public fb: FormBuilder
    ) { }

  clienteForm = this.fb.group({
    nome: ['']
  });

  ngOnInit() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data['clientes'];
    });

    this.produtoService.findAll().subscribe(data => {
      this.produtos = data['produtos'];
    });
  }

  finalizarPedido() {
    alert('finalizar');
  }
}
