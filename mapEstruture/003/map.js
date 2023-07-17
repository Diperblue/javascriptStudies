let arr = [1, 2, 3, 4, 5, 6, 7]
let cl = new Map()

for(let i in arr){
    cl.set(i, arr[i]**2)
}

console.log(cl.keys(), '\n', cl.values())