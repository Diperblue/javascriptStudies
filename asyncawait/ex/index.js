const $button = document.querySelector('button');

function main() {
  function handler(data) {
    const $p = document.createElement('p');
    const $body = document.querySelector('body');
    $p.textContent = data;
    $body.insertAdjacentElement('beforeend', $p);
  }
  const p = new Promise((right, error) => {
    const $xhr = new XMLHttpRequest();
    $xhr.onreadystatechange = function () {
      if(this.readyState == 4 && this.status == 200){
        right(this.response);
      };
    };
    $xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    $xhr.send();
  });
  (async function(){
    const r = await p;
    handler(r);
  })();
};

$button.addEventListener('click', main);