function afullName(){console.log(this.name+" "+this.lastName)}

const person = {
    name: "thiago",
    lastName: "Alcantará",
}

const person1 = {
    name: "eduardo",
    lastName: "Alcantará"
}

const fullName = afullName.bind(person)

console.log(fullName())
