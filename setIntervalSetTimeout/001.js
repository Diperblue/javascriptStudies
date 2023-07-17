let readline = require('readline')

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let verifyNumber = (a) => !(isNaN(Number(a))) ? () => {throw new Error('B(variable) not is num')} : 0

read.question('Quanto tempo??: ', (a) => {
    verifyNumber(a)
    read.question('Quanto tempo para voltar ao normal??: ', (b) => {
        verifyNumber(b) // verificando tempo
        const intervalId = setInterval(() => console.log('teste interval'), a);
        setTimeout(() => { clearInterval(intervalId) }, b)
    })
})