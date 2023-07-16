class Person {
    constructor(name, idade, profissao){
        this.name = name
        this.idade = idade
        this.profissao = profissao
    }
}
Person.prototype.greet = function() {
    console.log('Bom dia, ', this.name, ', você atualmente está com: ', this.idade, ', e trabalha com: ', this.profissao)
}

let j = new Person('jorge', 15, 'estudar')

j.greet()