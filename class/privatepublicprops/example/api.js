class cafe {
  constructor(limiteCafe, limiteAgua, limiteVelocidade) {
    this.liAgua = limiteAgua
    this.liCafe = limiteCafe
    this.liVelo = limiteVelocidade
  }

  set setcafe(cafe) {
    if(cafe>this.liAgua){
      throw new Error('Passou do limite de agua')
    }
    this.cafe = cafe
  }

  set setagua(agua) {
    if(agua>this.liCafe){
      throw new Error('Passou do limite do cafe')
    }
    this.agua = agua
  }
  get setcafe() {
    return this.cafe
  }
  get setagua() {
    return this.agua
  }
}

let cafeteira = new cafe(123, 123)

cafeteira.setcafe = 150
cafeteira.setagua = 100

console.log(cafeteira.setcafe)
console.log(cafeteira.setagua)
