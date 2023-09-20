class cafe {
  let _cafe = 0
  let _agua = 0

  constructor(limiteAgua, limiteVelocidade) {
    this.liAgua = limiteAgua
    this.liVelo = limiteVelocidade
  }

  set setcafe(cafe) {
    this._cafe = cafe
  }

  set setagua(agua) {
    this._agua = agua
  }
  get setcafe() {
    return this._cafe
  }
  get setagua() {
    return this._agua
  }
}

let cafeteira = new cafe(123, 123)

cafeteira.setcafe = 150
cafeteira.setagua = 100

console.log(cafeteira.setcafe)
console.log(cafeteira.setagua)
