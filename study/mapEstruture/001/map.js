let arr = ["t", "a", "c", 12, 13, "abefwq"];
let clone = new Map();

var a = 1
for(let i of arr){
    clone.set(a, i)
    a++
}

console.log(clone.keys(), '\n', clone.values())