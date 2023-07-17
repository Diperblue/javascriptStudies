let cache = new WeakMap();

let stringD = new String("calc"); // key for the weakmap

function caching(functionCache, objReturnedF) {
  // functionCache has object
  if (!cache.has(functionCache)) {
    console.log("CHEGUEI NO SET");
    cache.set(functionCache, objReturnedF);
  }
  cache.get(functionCache);
}

function calculoCustoso(numero) {
  console.log("Realizando cálculo custoso...");

  let resultado = 1;
  for (let i = 1; i <= numero; i++) {
    resultado *= i;
  }

  caching(stringD, resultado);
  return resultado;
}

console.log(calculoCustoso(5));
