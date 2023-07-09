const readline = require('readline');

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a, b;

try {
  read.question('Diga-me o primeiro número: ', function(answer) {
    a = Number(answer);
    read.question('\nDiga-me o segundo número: ', function(answer) {
      b = Number(answer);
      console.log("A divisão é igual a:", a / b);
      read.close();
    });
  });
} catch (err) {
  console.log("Ocorreu o erro:", err);
}
