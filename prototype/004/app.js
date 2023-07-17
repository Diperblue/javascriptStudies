class Calculator{
    constructor(number1, number2){
        this.n1 = number1
        this.n2 = number2
    }
}
Calculator.prototype.soma = function() {
    return this.n1 + this.n2
}
Calculator.prototype.subtracao = function() {
    return this.n1 - this.n2
}
Calculator,prototype.divisao = function() {
    return this.n1/this.n2
}
Calculator.prototype.multiplicacao = function() {
    return this.n1*this.n2
}