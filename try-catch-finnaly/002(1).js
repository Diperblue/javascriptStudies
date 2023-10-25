let readline = require('readline')


let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question("Diga-me o que quer converter para numero: ", function(answer){
    if(isNaN(Number(answer))){
        throw "isso não pode ser convertido para um número..."
    } else {
        console.log("foi convertido com sucesso para o número: ", Number(answer))
    }
    read.close()
})