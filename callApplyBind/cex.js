function a(ab){ console.log(this, ab) }

obj = { example1: "example" }

a.call(obj.example1, "eae")
