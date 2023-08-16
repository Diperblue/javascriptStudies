// Um número de fibonnaci de se dá pela soma dos dois ultimos 
/*function calcFiboNum(n){
    let ini = 1
    if (n!=1){
        // -n => n - 1
        // for 
        ini+=ini ; n-=1
    } else {
        return 1
    }
}*/

// let ini = 1
// ((1+1)+1)+(1+1)

function calcFiboNum(num){
    let i1 = BigInt(0) // ultimo da soma
    let i2 = BigInt(1) // segundo da soma
    let m = BigInt(0) // m = proximo
    for(let a=0;a<num;a++){
        i1 = m // 2
        m = i2+m // 1 + 2
        i2 = i1 // i2 = 2
        console.log(String(a)+': '+String(i1))
        // i1 = 3
        // m = 2+3
        // i2 = 3
    }
    return m
}

function calcFiboNum(num){
    // num e vai ser o proximo(m)
    
}
console.log(calcFiboNum(45))
