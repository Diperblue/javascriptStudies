let weakset = new WeakSet();
let obj = {nome:"teste"};
let cobj = obj;

weakset.add(obj);
// Certo
console.log(weakset.has(obj));

weakset.delete(obj);

console.log(weakset.has(obj));

