class Person {
  velo = 45

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get velocidade() {
    return this.velo
  }
}

const pedro = new Person('pedro', 100)

pedro.velocidade = 20
console.log(pedro.velocidade)
