const objeto1 = { name: "Objeto 1" };
let access = new WeakMap([[objeto1, 0]]);

let objProxy = new Proxy(objeto1, {
  get: (o, property) => {
    access.set(objeto1, access.get(objeto1) + 1);
    return o[property];
  },
});

console.log(objProxy.name); // acessando variavel
console.log(access.get(objeto1)); // verificando log
