const obj = newObj()

function newObj() {
    return(Object.create(null))
}

console.log(newObj)
console.log(Object.getPrototypeOf(newObj))