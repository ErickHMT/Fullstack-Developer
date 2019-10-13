export class Cliente {
    codigo: string;
    nome: string;

    constructor(cliente) {
        this.codigo = cliente.codigo;
        this.nome = cliente.nome;
    }
}
