const contR = (n) => n!=1 ? (console.log(n), contR(n-1)) : n

console.log(contR(10))
