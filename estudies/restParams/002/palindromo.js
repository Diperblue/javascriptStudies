let readline = require('readline')


function verifyPalindromo(...palavras){
    let p = ""

    for(var b = 0, palavraSplit = palavra.split("");b<palavras.length; b++){
        for(var b = 0;b<palavraSplit.length;b++){
            p.unshift(palavraSplit[b])
        }
    }
    return p
}

let read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Diga-me uma palavra para verificar se a mesma é um palindromo?: ', 
function(...palavra){
    // verifyArgs(palavra)
    verifyPalindromo(palavra[0])
})