class Person {
  name = "jorge"

  constructor() {
    console.log(this.name)
  }
}

class Aluno extends Person {
  name = "d1per"
}

new Aluno()
new Person()
