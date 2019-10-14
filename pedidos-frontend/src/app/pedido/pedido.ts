export class Pedido {

    id: number;
    qtdItens: number;
    valorFrete: number;
    valorTotal: number;

    constructor(qtdItens: number, valorFrete: number, valorTotal: number) {
        this.qtdItens = qtdItens;
        this.valorFrete = valorFrete;
        this.valorTotal = valorTotal;
    }
}
