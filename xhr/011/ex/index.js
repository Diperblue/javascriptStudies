const xhr = new XMLHttpRequest()
xhr.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(xhr)
    }
}

xhr.open("GET", "https://jsonplaceholder.typicode.com/comments")
xhr.send()

