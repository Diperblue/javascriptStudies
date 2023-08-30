const $button = document.querySelector('button');
const $img = document.querySelector('img');

$button.addEventListener('click', () => {
  $img.src = $img.src.includes("1.png") ? $img.src.replace("1.png", "2.png") : $img.src.replace("2.png", "1.png");
})