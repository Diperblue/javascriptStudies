"use strict"

function addPost(json, callback) {
  const $body = document.querySelector('body');
  const $p = document.createElement('p');
  $p.textContent = JSON.parse(json);

  callback($p);

  $body.insertAdjacentElement('beforebegin', $p);
}

const $button = document.querySelector('button');
$button.addEventListener('click', () => {
  const $URL = "https://jsonplaceholder.typicode.com/posts";
  const $XHR = new XMLHttpRequest();

  $XHR.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      const $response = this.response;

      addPost($response, ($button) => {
        console.log("A requisição foi feita");
      })
    }
  }

  $XHR.open("GET", $URL);
  $XHR.send();
})