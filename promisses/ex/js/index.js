function promisse(func, then) {
  const $promisse = new Promise(func);
  $promisse.then(then);
}

function get(url) {
  promisse((resolver, reject) => { // assyc 
    const $xhr = new XMLHttpRequest();
    $xhr.onreadystatechange = function() {
      if(this.status == 200 && this.readyState == 4) {
        resolver(this.response);
      } else {
        reject("Ocorreu um erro na requisição.");
      }
    }
  }, (data) => {
    console.log(data);
  });
}

const $body = document.querySelector('body');
const $p = document.createElement('p');

$p.textContent = get();

$body.insertAdjacentElement('afterbegin', $p);