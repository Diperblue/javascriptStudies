const $button = document.querySelector('button');
$button.addEventListener('click', () => {
  const $pros = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 3000);
  });
  $pros.then((data) => {
    console.log(data);
  });
});