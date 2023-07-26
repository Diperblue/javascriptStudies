let a = [1, 2, 3, 4, 5];
let b = [0, -1, -2, 3];
let c = -1;

let intersection = new Set(
  a.filter((el) => {
    c++;
    for (var d = 0; d < b.length; d++) {
      if (el == b[d]) {
        console.log("DEBUG:", el, "\n", b[d]);
        return el;
      }
    }
  })
);

console.log(intersection);
