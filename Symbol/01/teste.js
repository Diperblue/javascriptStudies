class arr extends Array {
    [Symbol.toStringTag] = "Teste"
}

const array = new arr()
const a = Symbol.toStringTag

console.log("Log do symbol: "+array.a)
console.log({}.toString.call(array))