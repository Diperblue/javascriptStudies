const sumTo = (n) => n!=1 ? n+=sumTo(n-1) : n
console.log(sumTo(1001))
