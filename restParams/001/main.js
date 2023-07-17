let readline = require('readline')

function verifyNum(...b){
    for(var a = 0;a<b.length;a++){
        if(isNaN(Number(b[a])))
            throw new Error('Isto não é um número')
        else if(b.length>3)
            throw new Error('Não deve ter mais que 3 argumentos')
    }
}

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Diga-me a base do retangulo: ', function(a){
    a = Number(a)
    read.question('Diga-me a altura do triangulo: ', function(b){
        b = Number(b)
        verifyNum(a, b) // verificando se os valores são números
        console.log('O quadrado tem altura a*b: ', a*b)
    })
})
