class Person
{
  constructor(name, email) {
    this.name = name
    this.email = email
  }
}
Person.prototype.info = () => 
{
  console.log(this.name)
  console.log(this.email)
}

let pessoa = new Person("joão", "teste@gmail.com")
pessoa.info()
