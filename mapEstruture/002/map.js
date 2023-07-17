let arr = ["a", "b", "c"]
let clone = new Map()

for(let i in arr){
    clone.set(i, arr[i].toUpperCase())
}

console.log(clone.keys(), "\n", clone.values())