function Book(title) {
    this.title = title
}

var book = new Book('Entendendo ES6')
console.log(book) // {title: 'Entendendo ES6'}
console.log(book.title) // Entendendo ES6

var secondBook = {
    title: 'Anjos e Demônios'
}

console.log(secondBook.title) // Anjos e Demônios

var anotherBook = secondBook
secondBook.title = 'O Código da Vinci'
// Apontam para a mesma referência

console.log(anotherBook.title) // O Código da Vinci
console.log(secondBook.title) // O Código da Vinci

secondBook.title = 'Anjos e Demônios'
secondBook.author = 'Dan Brown'
secondBook['showBook'] = function() {
    console.log(`${this.title}, ${this.author}`)
}

secondBook.showBook() // Anjos e Demônios, Dan Brown

var name = 'Maria'
var lastName = 'Madalena'

var person = {
    name: name,
    lastName: lastName
}

console.log(person) // {name: 'Maria', lastName: 'Madalena'}

name = 'José'
lastName = 'da Silva'
var secondPerson = {name, lastName}
console.log(secondPerson) // {name: 'José', lastName: 'da Silva'}

// Quando a propriedade tem o mesmo nome da variável não é necessário informar a chave: valor

name = 'Roger'
lastName = 'Silvestre'

function introduceYourself() {
    console.log(`Olá! Sou o(a) ${this.name} ${this.lastName}`)
}

const newPerson = {
    name,
    lastName,
    introduceYourself
}

newPerson.introduceYourself()

// Ao declarar uma função dentro de um objeto não é mais necessário utilizar a palavra reservada function

const city = {
    name: 'São Paulo',
    population: 12000000,
    presentation() {
        console.log(`A cidade de ${this.name} possui ${this.population} habitantes`)
    }
}

city.presentation()

// Índices de propriedades computadas

const methodName = 'invoke'
const object = {
    [methodName]() {
        console.log('Executou método')
    }
}

object.invoke()

const functionName = 'show'
const property = 'Name'

const newObject = {
    Name: 'Objeto',
    [`${functionName}${property}`]() {
        console.log(this[property])
    }
}

newObject.showName()

const nickname = 'nickname'
const anotherPerson = {
    name: 'José',
    [nickname]: 'Zé'
}

console.log(anotherPerson.nickname)

function getScreenData() {
    const name = 'Carol'
    const age = 17
    const gender = 'Female'
    const healthPlan = 'Unimed'
    return {name, age, gender, healthPlan}
}

const data = getScreenData()

console.log(data.name)
console.log(data.age)
console.log(data.gender)
console.log(data.healthPlan)