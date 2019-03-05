// * rotula uma função como geradora
// a palavra reservada yield define um ponto de parada da função

function *throughLine477() {
    console.log('Passei pela rua 1')
    yield 'Fim da linha'
}

console.log(throughLine477()) // {}

const line = throughLine477()
const stop = line.next() // Passei pela rua 1
console.log(stop) // {value: 'Fim da linha': done: false}
console.log(line.next()) // {value: undefined, done: true}

function* throughLine478() {
    console.log('Passei pela rua 1')
    yield 'Parada 1'
    console.log('Passei pela rua 2')
    yield 'Parada 2'
    console.log('Passei pela rua 3')
    yield 'Parada 3'
    console.log('Passei pela rua 4')
    yield 'Fim da linha'
}

const newLine = throughLine478()
let nextLine = newLine.next() // Passei pela rua 1
console.log(nextLine) // {value: 'Parada 1', done: false}

nextLine = newLine.next() // Passei pela rua 2
console.log(nextLine) // {value: 'Parada 2', done: false}

nextLine = newLine.next() // Passei pela rua 3
console.log(nextLine) // {value: 'Parada 3', done: false}

nextLine = newLine.next() // Passei pela rua 4
console.log(nextLine) // {value: 'Parada 4', done: false}

nextLine = newLine.next()
console.log(nextLine) // {value: undefined, done: true}

const anotherLine = throughLine478()
let nextAnotherLine = anotherLine.next()

while(!nextAnotherLine.done) {
    console.log(nextAnotherLine)
    nextAnotherLine = anotherLine.next()
}

console.log(nextAnotherLine) // {value: undefined, done: true}

const lineWithForOf = throughLine478()

for(let stop of lineWithForOf) {
    console.log(stop)
}

const primeNumbers = [2, 3, 5]
const iterator = primeNumbers[Symbol.iterator]()

console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: 5, done: false}
console.log(iterator.next()) // {value: undefined, done: true}

const softwareDevelopmentTeam = {
    quantity: 3,
    maturity: 'Alta',
    senior: 'Luís',
    full: 'Márcia',
    junior: 'Christian',
    [Symbol.iterator]: function* () {
        yield this.senior
        yield this.full
        yield this.junior
    }
}

for(let member of softwareDevelopmentTeam) {
    console.log(member) // Luís Márcia Christian
}

const developmentTeam = {
    quantity: 3,
    senior: 'Luís',
    full: 'Maŕcia',
    junior: 'Christian',
    [Symbol.iterator]: function* () {
        yield this.senior
        yield this.full
        yield this.junior
    }
}

const businessTeam = {
    quantity: 2,
    director: 'Marcelo',
    vicePresident: 'Guilherme',
    [Symbol.iterator]: function* () {
        yield this.director
        yield this.vicePresident
    }
}

const team = {
    developmentTeam,
    businessTeam,
    [Symbol.iterator]: function* () {
        yield* developmentTeam
        yield* businessTeam
    }
}

for(let member of team) {
    console.log(member)
}

// Luís Márcia Christian Marcelo Guilherme