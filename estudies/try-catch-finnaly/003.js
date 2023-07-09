let readline = require('readline')
let fs = require('fs')

try {
    let rl = readline.createInterface({
        input: fs.createReadStream('./teste.txt'),
        output: process.stdout,
        terminal: false
    })

    rl.on('line', function(line){
        console.log(line)
    })
}
catch (err) {
    console.log(err)
}
finally {
    console.log('O processo foi terminado')
}