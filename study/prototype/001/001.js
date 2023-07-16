class Animal {
    constructor(name, ano){
        this.name = name
        this.idade = ano
    }
}
Animal.prototype.nY = function() {
    console.log('O nome do animal é: ', this.name,
                "A idade é: ", this.ano)
}

let cachorro = new Animal('doguinho', 1900)
cachorro.nY()