let Veiculo = {
    marca: "sony",
    ano: 1900,
    detalhes: "NA"
}

let carro = {
    cor: "preto",
    acelerar() {
        console.log("O carro está acelerando..")
    },
    __proto__: Veiculo
}