const $body = document.querySelector('body');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

$button.addEventListener('click', () => {
  const url = $input.value;
  const $promisse = new Promise((resolved, error) => {
    const $xhr = new XMLHttpRequest();
    $xhr.onreadystatechange = function() {
      if(this.status == 200 && this.readyState == 4 ) {
        resolved(this.response);
      }
    }
    $xhr.open('GET', url);
    $xhr.send();
  })
  $promisse
  .then((data) => {
    const $p = document.createElement('p');
    $p.textContent = data;
    $body.insertAdjacentElement("beforeend", $p);
  })
  .catch((data) => {
    console.log(data);
  })
})