var students = [
    {name: 'João'},
    {name: 'José'},
    {name: 'Maria'}
]

var student = students.find(function(student) {
    return student.name === 'José'
})

console.log(student)
// {name: 'José'}
// Retorna o primeiro registro do array