const $body = document.querySelector('body'); // referenciador do body
const $button = document.createElement('button');
const $p = document.createElement('p');

(async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const $promise = await fetch(url);
  
  const json = await $promise.json();

  $p.textContent = json[0];
  console.log(json);
})();

$body.insertAdjacentElement('afterbegin', $button);
$body.insertAdjacentElement('beforeend', $p);