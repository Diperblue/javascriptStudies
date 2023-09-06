const $p = document.querySelector('p');
const url = "https://api.github.com/users/";

async function getUsers(arr) {
  for(let a of arr) {
    const promise = await fetch(url+a);
    $p.textContent += await promise.text();
  }
}