class Conta {
  constructor(nome, saldo) {
    this.nome = nome
    this.saldo = saldo
  }
}


class contaPoupanca extends Conta {
  constructor(nome, saldo, tempo) {
    super(nome, saldo)
    this.tempo = tempo
    this.rentabilidade = 0.5
  }

  calcularRentabilidade() {
    this.saldo = (this.saldo*this.rentabilidade/100)+this.saldo
  }

  sacar(quantia) {
    this.saldo-=quantia
  }

  depositar(quantia) {
    this.saldo+=quantia
  }
}

class contaCorrente extends Conta {
  sacar(quantia) {
    this.saldo-=quantia
  }

  depositar(quantia) {
    this.saldo+=quantia
  }
}


// teste 1
/*const conta1 = new contaCorrente('jorge', 1000)

conta1.sacar(300)
console.log(conta1.saldo)*/

// teste 2
const conta1 = new contaPoupanca('jorge', 1500, 7)

conta1.calcularRentabilidade()
console.log("Rentabilidade: ",conta1.saldo)
conta1.sacar(300)
console.log(conta1.saldo)
