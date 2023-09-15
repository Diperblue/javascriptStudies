class Produto {
  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco
  }
}

class Eletronico extends Produto {
  constructor(nome, preco) {
    super(nome, preco)
    this.desconto = 10
  }

  set calcularDesconto(v) {
    this.preco = this.preco-(this.preco*this.desconto/100)
  }
}

class Roupa extends Produto {
  constructor(nome, preco) {
    super(nome, preco)
    this.desconto = 25
  }

  calcularDesconto() {
    this.precodesc = this.preco-(this.preco*this.desconto/100)
  }
}

// teste 01
const roupa1 = new Roupa('langerie da putaria', 54.3)
roupa1.calcularDesconto()
console.log("NOME: ",roupa1.nome)
console.log("PRECO: ",roupa1.preco)
console.log("PRECO com desconto: ",roupa1.precodesc)



