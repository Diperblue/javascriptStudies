let access = new WeakMap();
let accessCount = 0;

const objeto1 = { name: "Objeto 1" };
const objeto2 = { name: "Objeto 2" };
const objeto3 = { name: "Objeto 3" };

// Exemplos de acesso aos objetos
// ...

class Object extends Object {
  setGet(obj) {
    access.set(obj, acessCount + 1);
  }
}
