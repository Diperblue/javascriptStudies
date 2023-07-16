class Shape{
    constructor(type, { ...l }){
        this.geoForm = type
        this.h = altura
        this.l = largura
        this.a = area
        this.r = raio
        this.pi = 3.14
        this.b = base
    }
}
Shape.prototype.a = function(){
    if(this.geoForm=="quadrado")        
        this.a = this.l**2
    else if(this.geoForm=="circulo")
        this.a = this.pi(this.r**2)
    else if(this.geoForm=="retangulo")
        this.a = this.b*this.h
    return this.a
}