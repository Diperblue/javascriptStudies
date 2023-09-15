class Person {
  constructor(name, age) {
    this.respeito = 1
    this.name = name
    this.age = age
  }
  myName() {
    return "My name's "+this.name
  }
}

class Policial extends Person {
  constructor(name, age, patent) {
    super(name, age)
    this.respeito = patent
  }
  sefoda() {
    console.log("Mermão vo comer teu cu com areia lek")
  }
}

const police = new Policial("Inimigo", 1231243, 192)

console.log(police.name)
