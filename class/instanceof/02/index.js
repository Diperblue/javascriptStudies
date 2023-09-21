// utilizando toString como alternativa para o typeof e instanceof
let verify = Object.prototype.toString
const arr = []

// verify
console.log(verify.call(arr)) // [object Array]