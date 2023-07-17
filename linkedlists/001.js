class No {
    constructor(valor){
        this.valor = valor
        this.proximo = null
    }
}
class Lista {
    constructor() {
        this.cabeca = null
    }

    adicionar(valor) {
        const novoNo = new No(valor)
    }
}