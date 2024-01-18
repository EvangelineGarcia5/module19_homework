const user = {
    age: 19,
    name: 'Evangeline',
    position: 'developer'
}

function compare(obj, objKeyName) {
    return (objKeyName in obj)
}

console.log(compare(user, 'position'))
console.log(compare(user, 'lastName'))