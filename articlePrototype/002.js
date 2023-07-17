// Armazene uma referência ao método original
const originalSplit = String.prototype.split;

String.prototype.split = function(separator) {
  // Implemente o novo comportamento do método split aqui
  console.log("Método split() modificado!");

  // Chame o método original usando a referência armazenada
  return this.originalSplit(separator);
};

let myString = "Hello, World!";
console.log(myString.split(" ")); // Saída: Método split() modificado! ["Hello,", "World!"]

