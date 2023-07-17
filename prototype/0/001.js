class Animal
{
  constructor(name, year)
  {
    this.name = name
    this.year = year
  }
}

Animal.prototype.info = function() {
  console.log("Name of animal is: ", this.name)
  console.log("Years of animal is: ", this.year)
}

let spike = new Animal('spike', 2.5)
spike.info()
