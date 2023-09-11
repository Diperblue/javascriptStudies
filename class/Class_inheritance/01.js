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


const cat = new Gato('teste', 27)

cat.miau()
