var numbers = [1, 2, 3, 4, 5]

var sum = 0

sum = numbers.reduce(function(sum, currentNumber) {
    return sum + currentNumber
}, 0)

console.log(sum)
// 15

var students = [
    {name: 'João', age: 10},
    {name: 'José', age: 20},
    {name: 'Marcos', age: 30}
]

var names = students.reduce(function(arrayNames, student) {
    arrayNames.push(student.name)
    return arrayNames
}, [])

console.log(names)
// ['João', 'José', 'Marcos']