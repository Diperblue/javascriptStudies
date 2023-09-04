const $button = document.querySelector('button');
const $span = document.querySelector('p');

$button.addEventListener('click', () =>{
  setTimeout(() => {
    $span.innerText = "a"
  }, 3000);
})