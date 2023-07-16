let pessoa = {
    nome: "jorge",
    idade: 16,
    apresentar() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let aluno = {
    __proto__: pessoa,
    curso: "ciencia da computação",
    estudar() {
        console.log(`Estou estudando ${this.curso}`)
    }
}