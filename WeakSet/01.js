let peopleBar = new WeakSet();
let log = new Map();
let john = { "name": "john", "year": "27" };

let proxypeople = new Proxy(peopleBar, {
  apply: (target, thisArg, argumentsList) => {
    const [method] = argumentsList;
    if (method === "add") {
      const [val] = argumentsList.slice(1);
      console.log(target); // debug
      log.set(val, "added");
      return target.add(val);
    }
  }
});

proxypeople.add(john);
