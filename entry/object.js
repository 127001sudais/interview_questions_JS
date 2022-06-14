let obj = {
    a: "hello world",// property
    b: 43,
    c: true
}

console.log("accesed with dot notation:")
console.log(obj.a)
console.log(obj.b)
console.log(obj.c)
console.log("******** \n")

console.log("accesed with bracket notation:")
console.log(obj["a"])
console.log(obj["b"])
console.log(obj["c"])
console.log("******** \n")

// Bracket notation is also useful if you want to access a property/key but the name is store in another variable,such as:

let b = "a"

console.log("obj[b] ", obj[b]) //hello world
console.log(`obj["b"] `, obj["b"]) //42