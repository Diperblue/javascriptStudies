let readline = require('readline')

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Diga-me um número: ', function(a){
    if(isNaN(Number(a)))
        throw new Error('Isso não é um número')
    for(let b = a; b>=0; console.log(b), b--){}
})