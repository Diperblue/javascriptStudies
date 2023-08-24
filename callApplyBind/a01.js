"use strict"
function sumNumbers(arr){
    let retur = 0
    for(let a of arr){
        retur+=a
    }
    return retur
}

const obj = {}

console.log(sumNumbers.apply(obj, [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]))
