class Car {
  construct(name) {
    this.name = name;
  }
}

let carProxy = new Proxy(Car, {
  construct: (target, args) => {
    console.log("Nova instância");
    return new target(...args);
  },
});

let carro = new carProxy("ttt");
