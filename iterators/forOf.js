var numbers = [1, 2, 3, 4, 5]

for(var number of numbers) {
    console.log(number)
}

// 1 2 3 4 5

var facebookProfile = {
    name: 'Carlos',
    age: 22
}

for(var property in facebookProfile) {
    var info = facebookProfile[property]
    console.log(info)
}

// Carlos 22

for(var number of numbers) {
    if(number > 3) {
        break
    }
    console.log(number)
}

// 1, 2, 3

for(var number of numbers) {
    if(number === 2) {
        continue
    }
    console.log(number)
}

// 1 3 4 5

var wizards = ['Harry Potter', 'Hermione Granger', 'Rony Weasley']

for(var wizard of wizards) {
    console.log(`Aluno: ${wizard} | Casa: Grifinória`)
}