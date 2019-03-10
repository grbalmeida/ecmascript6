const Person = {
    name: 'Diogo',
    age: 25
}

console.log(Object.entries(Person))
// [['name', 'Diogo'], ['age', 25]]

for(let [key, value] of Object.entries(Person)) {
    console.log(`${key}: ${value}`)
}

// name: Diogo
// age: 25

console.log(Object.values(Person)) // ['Diogo', 25]

console.log(Object.entries({[Symbol()]: 123})) // []