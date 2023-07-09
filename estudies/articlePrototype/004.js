let coelho = {
  pula: true
}

let rat = {
  come: false
}

rat.__proto__ = coelho

console.log(rat.pula)
