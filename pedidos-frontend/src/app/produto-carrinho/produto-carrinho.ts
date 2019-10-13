import { Produto } from 'src/app/produto/produto';

export class ProdutoCarrinho {
    produto: Produto;
    quantidade: number;

    constructor(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
}
