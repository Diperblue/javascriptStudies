let a = {};
let b = {};
let c = {};

let weakInscrito = new WeakMap();

let pessoa = {
  getInscrito: () => {
    weakInscrito.get(pessoa);
  },
  inscrever: (evento) => {
    let insc = weakInscrito.get(this);
    if (insc == []) {
      weakInscrito.set(this, [evento]);
    } else if (insc.includes(evento)) {
      throw new Error("Você já está incrito nesse evento.");
    } else {
      weakInscrito.set(this, insc.push(evento));
    }
  },
};

weakInscrito.set(pessoa, [a]); // initial
//
//
//

console.log(pessoa.getInscrito());
