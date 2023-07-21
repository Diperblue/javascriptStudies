function removeDup(ls) {
  let set = new Set(ls);
  return Array.from(set);
}

console.log(removeDup([1, 1, 2, 2, 3, 3]));
