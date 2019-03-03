var students = [
    {name: 'João', age: 18},
    {name: 'Maria', age: 20},
    {name: 'Pedro', age: 24}
]

var allStudentsInLegalAge = students.every(function(student) {
    return student.age >= 18
})

console.log(allStudentsInLegalAge)
// true