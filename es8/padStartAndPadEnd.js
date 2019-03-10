const professions = [
    'Desenvolvedor',
    'Engenheiro',
    'Jornalista',
    'Arquiteto',
    'Médico'
]

let maxLength = 0 

// without padStart

professions.forEach(profession => {
    if(profession.length > maxLength) {
        maxLength = profession.length
    }
})

professions.forEach(profession => {
    const difference = maxLength - profession.length
    let word = ''
    for(let index = 0; index < difference; index++) {
        word += ' '
    }

    word += profession
    console.log(word)
})

// with padStart

professions.forEach(profession => {
    console.log(profession.padStart(maxLength))
})

// without padEnd

professions.forEach(profession => {
    const difference = maxLength - profession.length

    for(let index = 0; index < difference; index++) {
        profession += '-'
    }

    console.log(profession)
})

// with padEnd

professions.forEach(profession => {
    console.log(profession.padEnd(maxLength, '-'))
})