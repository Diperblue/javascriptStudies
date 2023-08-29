const $button = document.querySelector('button');

const clickHandler = () => {
  console.log("Iso aqui é um callback");
}

$button.addEventListener("click", clickHandler);