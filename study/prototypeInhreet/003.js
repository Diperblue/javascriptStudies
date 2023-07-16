let Forma = {
    cor: "branco",
    calcularArea(l, l) {
        return l*l
    }
}

let quadrado = {
    __proto__: Forma
}

let circulo = {
    __proto__: Forma,
    calcularArea(r){
        return 3.14*r**2
    }
}