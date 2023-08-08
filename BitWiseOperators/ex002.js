// Binary numbers
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1; // Verifica o bit menos significativo
    num >>= 1; // (num = 1 >> 1) Desloca o número para a direita
  }
  return count;
}

// Teste a função
const number = 1; // Exemplo de número em binário: 101010
const setBits = countSetBits(number);
console.log(`O número ${number} tem ${setBits} bits "1" definidos.`);
