// tt

let weakmap = new WeakSet();

let b = { v: "ttt" };

weakmap.add(b);

console.log(weakmap.has(b));
