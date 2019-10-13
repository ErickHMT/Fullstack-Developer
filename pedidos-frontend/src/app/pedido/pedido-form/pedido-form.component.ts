import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
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
  clienteSelecionado: Cliente;

  clienteForm: FormGroup;
  produtosForm: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    public fb: FormBuilder
    ) { }

  ngOnInit() {
    this.clienteForm = this.fb.group({
      nome: [null, Validators.required]
    });

    this.produtosForm = this.fb.group({
      produtos: [null, Validators.required],
      produtosCarrinho: new FormArray([])
    });

    this.carregarInformacoes();
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

  // getters para acesso ao form
  get f() { return this.produtosForm.controls; }
  get pc() { return this.f.produtosCarrinho as FormArray; }

  selecionarCliente(clienteSelecionado: NgSelectComponent) {
    clienteSelecionado.selectedItems.length === 0
      ? this.clienteSelecionado = null
      : this.clienteSelecionado = new Cliente(clienteSelecionado.selectedItems[0].value);
  }

  addProdutoCarrinho(select: NgSelectComponent) {
    const produtoSelecionado = select.selectedItems[0].value;
    const produto = new Produto(produtoSelecionado);
    const produtoCarrinho = new ProdutoCarrinho(produto, 1);

    this.pc.push(this.fb.group({
      produto: [produtoSelecionado],
      quantidade: [1, [Validators.required]]
    }));

    select.selectedItems.length = 0;
    this.produtosCarrinho.push(produtoCarrinho);
  }

  removeProdutoCarrinho(produto) {
    const codigoProduto = produto.codigo;
    // this.produtos.push(produto);
    this.pc.removeAt(this.pc.value.findIndex(p => p.produto.codigo === codigoProduto));
    this.calculaValorItensCarrinho();
  }

  finalizarPedido() {
    if (!this.clienteSelecionado) {
      alert('Selecione um cliente!!');
      return;
    }

    const produtosCarrinho = this.produtosCarrinho;
    if (!produtosCarrinho || produtosCarrinho.length === 0) {
      alert('Adicione um item ao carrinho');
      return;
    }

    JSON.stringify(this.produtosForm.value);
    alert('Adicionando pedido');
  }

  limparCarrinho() {
    this.produtosCarrinho = [];
  }

  calculaValorItensCarrinho() {
    let total = 0;
    this.pc.controls.forEach(produtoCarrinho => total += produtoCarrinho.value.quantidade * produtoCarrinho.value.produto.precoUnitario);
    return total;
  }

  getValorFrete() {
    // TODO buscar valor do frete;
    return 0;
  }

}
