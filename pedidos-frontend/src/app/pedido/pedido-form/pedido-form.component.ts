import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { NgSelectComponent } from '@ng-select/ng-select';

import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoService } from 'src/app/produto/produto.service';

import { Cliente } from 'src/app/cliente/cliente';
import { Produto } from 'src/app/produto/produto';
import { ProdutoCarrinho } from 'src/app/produto-carrinho/produto-carrinho';
import { PedidoService } from '../pedido.service';
import { FreteService } from './../../frete/frete.service';
import { Pedido } from '../pedido';

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

  valorFrete = 0;

  constructor(
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
    private freteService: FreteService,
    private pedidoService: PedidoService,
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
      this.produtos = data['produtos'];
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
    this.atualizaValorFrete();
  }

  removeProdutoCarrinho(produto) {
    const codigoProduto = produto.codigo;
    this.pc.removeAt(this.pc.value.findIndex(p => p.produto.codigo === codigoProduto));
    this.calculaValorItensCarrinho();
    this.atualizaValorFrete();
  }

  finalizarPedido() {
    if (!this.clienteSelecionado) {
      alert('Selecione um cliente!!');
      return;
    }

    const produtosCarrinho = this.pc.controls;
    if (!produtosCarrinho || produtosCarrinho.length === 0) {
      alert('Adicione um item ao carrinho');
      return;
    }

    const pedido = new Pedido(this.qtdProdutosCarrinho, this.valorFrete, this.calculaValorTotal());
    this.pedidoService.salvar(pedido).subscribe(data => {
      this.limparCarrinho();
      alert('Salvo com sucesso! ' + JSON.stringify(data));
    }, err =>
      alert('Falha ao salvar pedido')
    );
  }

  limparCarrinho() {
    for (let i = this.pc.controls.length; i >= 0; i--) {
      this.pc.removeAt(i);
    }
    this.atualizaValorFrete();
  }

  calculaValorItensCarrinho() {
    let total = 0;
    this.pc.controls.forEach(produtoCarrinho => total += this.getPrecoProduto(produtoCarrinho.value));

    return total;
  }

  getPrecoProduto(produtoCarrinho) {
    return produtoCarrinho.produto.precoUnitario * produtoCarrinho.quantidade;
  }

  calculaValorTotal() {
    return this.calculaValorItensCarrinho() + this.valorFrete;
  }

  atualizaValorFrete() {
    let qtdProdutos = this.qtdProdutosCarrinho;
    console.log('----------QTD PRODUTOS: ', qtdProdutos);
    this.freteService.getValorFrete(qtdProdutos).subscribe(data => this.valorFrete = data['valorFrete']);
  }

  get qtdProdutosCarrinho() {
    let qtdProdutos = 0;
    this.pc.controls.forEach(produtoCarrinho => qtdProdutos += produtoCarrinho.value.quantidade);
    return qtdProdutos;
  }
}
