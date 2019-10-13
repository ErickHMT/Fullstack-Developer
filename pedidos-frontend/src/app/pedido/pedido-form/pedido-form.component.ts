import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoService } from 'src/app/produto/produto.service';

import { Cliente } from 'src/app/cliente/cliente';
import { Produto } from 'src/app/produto/produto';
import { ProdutoCarrinho } from 'src/app/produto-carrinho/produto-carrinho';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  produtosCarrinho: ProdutoCarrinho[] = [];

  clienteForm: FormGroup;
  produtoForm: FormGroup;

  clienteSelecionado: Cliente;

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    public fb: FormBuilder
    ) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      nome: [null, Validators.required]
    });

    this.produtoForm = this.fb.group({
      produto: [null, Validators.required],
    });

    this.carregarInformacoes();
  }

  selecionarCliente(clienteSelecionado: NgSelectComponent) {
    clienteSelecionado.selectedItems.length === 0
      ? this.clienteSelecionado = null
      : this.clienteSelecionado = new Cliente(clienteSelecionado.selectedItems[0].value);
  }

  addProdutoCarrinho(select: NgSelectComponent) {
    const produtoSelecionado = select.selectedItems[0];

    const produto = new Produto(produtoSelecionado.value);
    const produtoCarrinho = new ProdutoCarrinho(produto, 1);

    select.selectedItems.length = 0;
    // this.produtos = this.produtos.filter( (ab, index) => ab.codigo !== produto.codigo );
    this.produtosCarrinho.push(produtoCarrinho);
  }

  removeProdutoCarrinho(produto) {
    const codigoProduto = produto.codigo;
    // this.produtos.push(produto);

    this.produtosCarrinho = this.produtosCarrinho.filter(produtoCarrinho =>
      produtoCarrinho.produto.codigo !== codigoProduto
    );
  }

  finalizarPedido() {
    if (!this.clienteSelecionado) {
      alert('Selecione um cliente!!');
      return;
    }

    const produtosCarrinho = this.produtosCarrinho;
    if (produtosCarrinho || produtosCarrinho.length === 0) {
      alert('Adicione um item ao carrinho');
      return;
    }

    alert('Adicionando pedido');
  }

  limparCarrinho() {
    this.produtosCarrinho = [];
  }

  carregarInformacoes() {
    this.clienteService.findAll().subscribe(data => {
      this.clientes = data['clientes'];
    });

    this.produtoService.findAll().subscribe(data => {
      const produtos = data['produtos'];
      this.produtos = produtos.map(produto => new Produto(produto));
    });
  }
}
