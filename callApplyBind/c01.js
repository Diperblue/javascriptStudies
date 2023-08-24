function sumNumbers(a, b) {
    return a+b
}
const obj = {pr: 1, se: 2}
console.log(sumNumbers.call(obj, 1, 2))

