class Person {
    constructor(name, idade, profissao){
        this.name = name
        this.idade = idade
        this.bump = [] 
        this.profissao = profissao
        if (Array.isArray(name) == true)
            this.bump.push(name)
        else if (idade.isArray() == true)
            this.bump.push(idade)
        else if (profissaoisArray() == true)
            this.bump.push(profissao)
    }
}
Person.prototype.greet = function() {
    console.log('Bom dia, ', this.name, ', você atualmente está com: ', this.idade, ', e trabalha com: ', this.profissao)
}

Person.prototype.removeDup = function(arr, debug=false) { // função que remove elementos dupicados
                                            // de um array
    for(b=0;b<arr.length;b++){
        let aaN = arr[b] // initial is 0
        for(a=0;a<=arr.length-1;a++){
            if(debug==true){
                console.log(arr)
                console.log("VERIFICANDO IQUALDADE DE, ", aaN, "==", arr[a], "INDICE: ", a)
            }
            if(aaN==arr[a] && b != a){
                arr.splice(a, 1)
            }
        }
        
    }
}
// Person.prototype.removeDup = function(){}

let j = new Person(['teste','teste', 'aead', 'ab', 'teste', 'ab', 'aead', 'ab'], 15, 'estudar')
j.removeDup(j.name)

j.greet()