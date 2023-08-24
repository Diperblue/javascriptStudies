function Animal(name) {
    this.name = name
}

function Cat(name, breed){
    Animal.call(this, name)
    this.breed = breed
}

const bichano = new Cat('bichano', 'vira-lata')
console.log(bichano.breed)
