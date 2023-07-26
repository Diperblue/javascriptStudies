let sast = require("readline");

let sas = sast.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let myweakset = new WeakSet();
function createAndAddToWeakSet(prope) {
  objb = { prope: "teste" };
  myweakset.add(objb);

  return objb;
}

sas.question(": ", (as) => {
  let a = createAndAddToWeakSet(as);
  console.log(myweakset.has(a));
});
