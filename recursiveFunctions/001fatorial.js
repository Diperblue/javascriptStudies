const fatorial = (n) => n!=1 ? n*=fatorial(n-1) : n

console.log(fatorial(3))
// 4 != 1
// 4 * fatorial(3)
// fatorial(3) => 3 != 1 => 3 * fatorial(2) => 2!= 1 => 2 * 1
// fatorial(3) => 3 != 1 => 3 * fatorial(2) => 2 != 1 => 2
// fatorial(3) => 3 != 1 => 3 * 2
// fatorial(3) => 3 != 1 => 6
// fatorial(3) = 6

