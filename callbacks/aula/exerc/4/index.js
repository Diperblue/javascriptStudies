function createImage(src, callback=()=>{}) {
  const $body = document.querySelector('body');
  const $image = document.createElement('img');
  $image.src = src;

  callback();

  $body.insertAdjacentElement('beforeend', $image);
  return $image;
}

const $image1 = createImage('./');
const $image2 = createImage('./');