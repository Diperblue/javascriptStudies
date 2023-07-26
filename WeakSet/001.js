let a = [{ b: "a" }, { c: "b" }, { a: "c" }];
let d = new WeakSet([a[0], a[1], a[2]]);

for (var f of a) {
  console.log(d.has(f));
}
