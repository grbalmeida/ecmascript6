var wizards = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

// obtem o iterador
var wizardsIterator = wizards[Symbol.iterator]()

console.log(wizardsIterator.next()) // {value: 'Harry Potter', done: false}
console.log(wizardsIterator.next()) // {value: 'Hermione Granger', done: false}
console.log(wizardsIterator.next()) // {value: 'Rony Weasley', done: false}
console.log(wizardsIterator.next()) // {value: undefined, done: true}

var iterator = wizards[Symbol.iterator]()
var done = false
var next = iterator.next()

do {
    var wizard = next.value
    console.log(`Aluno: ${wizard} | Casa: Grifinória`)
    next = iterator.next()
} while(!next.done)