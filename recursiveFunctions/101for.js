function sumTo(num){
    let returnNum = 0
    returnNum += num
    for(var a=1;(num != 0);){
        num -= a
        returnNum += num
    }
    return returnNum
}

console.log(sumTo(4))
