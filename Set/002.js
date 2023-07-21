const a = [1, 2, 3];
const b = [2, 5, 7];

// tá recebendo objetos indivídualmente, transformando em lista e logo apos iterando
const union = new Set([...a, ...b]);

console.log(Array.from(union));
