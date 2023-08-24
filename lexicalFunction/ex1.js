const external = () => {
    const book = "sapiens"
    const internal = () => {
        console.log(book.toUpperCase())
    }
    internal()
}

external()
