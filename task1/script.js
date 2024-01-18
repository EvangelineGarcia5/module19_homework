const user = {
    name: 'Evangeline',
    age: 19
}

const user2 = Object.create(user)

user2.name = 'Ervin'
user2.age = 19
user2.likesDrawing = true

function func(user2) {
    for (let key in user2) {
        if (user2.hasOwnProperty(key))
        console.log(`${key}:${user2[key]}`)
    }
}

func(user2)