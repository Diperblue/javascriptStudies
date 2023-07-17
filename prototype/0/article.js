class Animal
{
  constructor(name, y) {
    this.name = name
    this.y = y
    this.info = function() {
      console.log("O nome do animal é: ", this.name)
      if( this.y == undefined )
        console.log("Idade do animal não definida...")
      else
        console.log("A idade do animal é: ", this.y)
    }
  }
}

let pet = new Animal("pet", 1)
pet.info()
