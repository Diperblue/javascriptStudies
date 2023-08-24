"use strict"
function binExample() {
    console.log(this)
}

const obj = {exemplo: "exemplo"}

const bindEx = binExample.bind(obj)

bindEx()
