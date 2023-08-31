export function get(url, callback) {
  const $XHR = new XMLHttpRequest();
  $XHR.onreadystatechange = function verify() {
    if(this.readyState == 4 && this.status == 200) {
      console.log(this.response);
    }
  }

  callback();
}