class Person {
  showName() {
    console.log("jorge")
  }

  constructor() {
    this.showName()
  }
}

class Police extends Person {
  showName() {
    console.log("D1per")
  }
}

new Person()
new Police()
