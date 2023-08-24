function displayInfo(age, occupation){
    return "Name:"+this.name+"\nIdade:"+age+"\nOcupação:"+occupation
}
const personS = { name: "blablabla" }
console.log(displayInfo.call(personS, 24, "programador"))
