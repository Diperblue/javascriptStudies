class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

class Gato extends Animal {
  constructor(name, age, raca) {
    super(name, age)
    this.raca = raca
  }

  miau() {
    console.log("Voz: MIAU MIAU")
    console.log(this.age+" tenho essa idade")
  }
}

class Cachorro extends Animal {
  constructor(name, age, raca) {
    super(name, age)
    this.raca = raca
  }

  au() {
    console.log("Voz: AU AU")
    console.log("Essa é a minha raça: ",this.raca)
  }
}

const cachorro = new Cachorro("Doguinho", 123, "woifnewo")

cachorro.au()
