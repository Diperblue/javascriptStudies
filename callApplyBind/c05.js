function greet(message){
    console.log("Ola ",this.name+message)
}
mensagem = "testesteesemgiewngasdasdasdasdsadasd"

person = { name: "venildo" }
person1 = { name: "rasbustem" }

greet.call(person, mensagem)
greet.call(person1, mensagem)
