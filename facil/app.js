let readline = require('readline')

let read = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

read.question(": ", (ans) => {
  console.log(ans**2-2*ans-3)
})
