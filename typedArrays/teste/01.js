// Criando buffer inicial
let bufferIni = new ArrayBuffer(16);

// Criando o que vai habilitar ver e modificar o buffer
let dv1 = new DataView(bufferIni);
let dv2 = new DataView(bufferIni, 10, 3);

dv1.setInt8(1, 42);
dv1.setInt16(2, 22);
console.log(dv1.getInt16(1));