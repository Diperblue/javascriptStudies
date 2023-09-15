class Person {
  constructor(name, age, country) {
    this.name = name
    this.age = age
    this.country = country
  }
  
  hi() {
    console.log("Ola, meu nome é: "+this.name)
  }

  where() {
    console.log("Eu venho da(o) "+this.country)
  }
}

const d1per = new Person('d1per', 182, 'eita')

d1per.hi()
d1per.where()

