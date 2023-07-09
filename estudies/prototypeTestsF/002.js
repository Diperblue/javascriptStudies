function Animal(name){
  this.name = name
}

let dog = new Animal('cachorro')

let dog1 = new dog.constructor('cachorro')

console.log(dog1.name)
