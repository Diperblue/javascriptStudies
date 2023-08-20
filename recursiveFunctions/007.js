const recurSum = (n) => n!=1 ? n+=recurSum(n-1) : n

console.log(recurSum(10))
