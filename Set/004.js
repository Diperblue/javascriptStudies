let a = [3, 2, 4];
let b = [1, 3, 7];

let difference = new Set(
  a.filter((el) => {
    for (var c = 0; c < b.length; c++) {
      console.log("DEBUG:", b[c], "", el);
      console.log(c);
      if (el != b[c]) {
        return el;
      }
    }
  })
);

console.log(difference);
