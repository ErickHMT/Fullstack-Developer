export class Produto {
    codigo: string;
    nome: string;
    precoUnitario: number;

    constructor(produto) {
        this.codigo = produto.codigo;
        this.nome = produto.nome;
        this.precoUnitario = produto.precoUnitario;
    }
}
