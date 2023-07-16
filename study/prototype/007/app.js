class Person{
    constructor(nome,idade=0,comment=""){
        this.nome = nome
        this.idade = idade
        this.comment = comment
    }
}
Person.prototype.greet = () => `Hello, my name is ${this.nome} and my age is ${this.idade}. my personality has a peculiarity: ${this.comment}`

class Animal{
    constructor(nome){
        this.name = nome
    }
}
Animal.prototype.name = () => `my name is ${this.name} AUW AUW`

function inherit(nameOfObject, herdObj, ...arg){
    // console.log("LOG(object person prototype initial): ")
    console.log("LOG: ", herdObj.constructor)
    // primeiro fazer ponteiro de object para herdObj
    // formator __proto__ f
    nameOfobject = {}
    nameOfObject.__proto__ = herdObj // { __proto__: Animal }
}

let dog = new Animal('testeEuSouUmCachorro')
let pessoa = new Person('eu sou uma pessoa')

inherit(pessoa, dog)

console.log(pessoa.name)