readline = require('readline')

String.prototype.isPalindrome = function() { // função que inverte a palavra
    var invert = []
    for(var a=0;a<this.valueOf().length;a++){
        invert.unshift(this.valueOf()[a])
    }
    if(invert.join('')==this.valueOf())
        return true
    else
        return false
}

read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question('Palavra que quer verificar se e um palindromo?: ', function(ans) {
    console.log(ans.isPalindrome())
    process.exit()
})