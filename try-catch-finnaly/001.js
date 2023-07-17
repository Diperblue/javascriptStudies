// programa que pede numero e da o quadrado do numero 

let readline = require('readline')

function notANumber(msg){
    this.msg = msg
    this.name = " not a Number"
    return msg + this.name
} 

let read = readline.createInterface({
    input: process.stdin,
    output: process.stout
})

read.question("Diga-me um número: ", function(answer) {
    try {
        if(! isNaN(Number(answer))) {
            console.log(answer*answer)
        } else { 
            throw new notANumber(answer)
        }
    } catch(err){
        console.log(err)
    }
})