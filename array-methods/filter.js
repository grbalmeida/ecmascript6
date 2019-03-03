var students = [
    {name: 'João', age: 15},
    {name: 'José', age: 18},
    {name: 'Maria', age: 20}
]

var studentsOfLegalAge = students.filter(function(student) {
    return student.age >= 18
})

console.log(studentsOfLegalAge)
// [{name: 'José', age: 18}, {name: 'Maria', age: 20}]