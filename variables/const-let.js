const dateOfBirth = '21/02/1972'
console.log(dateOfBirth)

const person = {name: 'João'}
person.age = 12
console.log(person)

let result = 0
result = 2 + 3
console.log(result)

// Diferença de escopo entre var e let/const

var message = 'Hello'
{
    var message = 'Goodbye'
}
console.log(message)
// Goodbye

var message = 'Hello'
function message() {
    var message = 'Goodbye'
}
console.log(message)
// Hello

const arrayVar = []
for(var index = 0; index < 5; index++) {
    arrayVar.push(function() {
        console.log(index)
    })
}

const arrayLet = []
for(let index = 1; index < 5; index++) {
    arrayLet.push(function() {
        console.log(index)
    })
}

arrayVar.forEach(function(myVar) {
    myVar() // 5 5 5 5
})

arrayLet.forEach(function(myLet) {
    myLet() // 1 2 3 4
})

// Hoisting

printName('Tabata')

function printName(name) {
    console.log(name)
}
// Tabata

let value = 0

if(true) {
    let value
    console.log(value) // undefined
    value = 1
    console.log(value) // 1
}
console.log(value) // 0