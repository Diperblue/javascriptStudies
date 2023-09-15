class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hello() {
    console.log("teste")
  }
}

class police extends User {
  skii() {
    console.log("teste")
  }
  teste() {
    super.hello()
    this.skii()
  }
}

const p1 = new police("telamfdksa", 124)

p1.hello()
