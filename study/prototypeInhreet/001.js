let animal = {
    nome: "sei lá",
    dizerNome() {
        console.log(nome) // correction this for: console.log(this.nome)
    }
}

let cachorro = {
    latir() {
        console.log("Au au")
    },
    __proto__: animal
}