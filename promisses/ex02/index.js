(() => {
  new Promise((resolve, reject) => {
    const $xhr = new XMLHttpRequest();
    $xhr.onreadystatechange = () => {
      if(this.readyState == 4 && this.status == 200) resolve(this.response)
      else reject(this)
    }
    $xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    $xhr.send();
  }).then((data) => {
    const $body = document.querySelector('body');
    const $p = document.createElement('p');
    $p.textContent = data;
    $body.insertAdjacentElement("beforeend", $p);
  });
})();