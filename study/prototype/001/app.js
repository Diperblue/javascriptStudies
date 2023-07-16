readline = require('readline')

String.prototype.inverse = function() { // função que inverte a palavra
    b = []
    for(var a=0;a<this.valueOf().length;a++){
        b.unshift(this.valueOf()[a])
    }
    return b.join('')
}

read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Palavra que quer inverter?: ', function(ans) {
    console.log(ans.inverse())
    process.exit()
})