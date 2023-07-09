let readline = require('readline')
let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// let verifyN = (a, b) => isNaN(Number(a)) || (isNaN(Number(b))) ? theow new Error('NaN')
let calcA = (a, b) => console.log(a * b)

read.question('Diga-me qual a altura(h) do tringulo: ', (a) => {
    read.question('Diga-me qual a largura(b) do triangulo: ', (b) => {
        calcA(a, b); process.exit()
    })
}) 