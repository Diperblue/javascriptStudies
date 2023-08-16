const fatorial = (n) => n!=1 ? n*=fatorial(n-1) : n

console.log(fatorial(5))

// fatorial(5) = 5 != 1 ? 5 * ( 4 != 1 ? 4 * ( 3 != 1 ? 3 * ( 2 != 1 ? 2 * 1 ) )  )
// fatorial(5) = 5 * ( 4 * ( 3 * 2 ))
// fatorial(5) = 5 * ( 4 * 6 )
// fatorial(5) = 5 * 24
// fatorial(5) = 120
