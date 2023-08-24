const person = {
    firstName: "Ana",
    lastName: "eduarda"
}

function fullName(){
    console.log(this.firstName + " " + this.lastName)
}

fullName.call(person)
