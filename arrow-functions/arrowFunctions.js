const welcome = name => `Seja bem-vindo, ${name}`
console.log(welcome('Luiz')) // Seja bem-vindo, João

function printMyExecutionContext() {
    console.log(this === global) // true
}

printMyExecutionContext()

var object = {
    myContext: function() {
        console.log(this === global) // false
    }
}

object.myContext()

const team = {
    name: 'Guerreiros Z',
    members: ['Goku', 'Kuririn', 'Vegeta'],
    teamMembers: function() {
        this.members.forEach(function(member) {
            console.log(`${member} é da equipe ${this.name}`)
        })
        // Goku é da equipe undefined, pois a função está referenciando o próprio this
        // E o this da função não conhece o atributo name
    },
    teamMembersThat: function() {
        const that = this
        this.members.forEach(function(member) {
            console.log(`${member} é da equipe ${that.name}`)
            // Possibilita enxergar dentro da callback o contexto do pai
        })
    },
    teamMembersArrowFunction: function() {
        this.members.forEach(member => console.log(`${member} é da equipe ${this.name}`))
        // Faz a associação (bind) do this de forma automática
    }
}

team.teamMembers()
team.teamMembersThat()
team.teamMembersArrowFunction()

function showContextProperty(propertyName) {
    console.log(this[propertyName])
}

var mockLocation = {
    location: 'fake-location'
}

var myFunction = showContextProperty.bind(mockLocation)
myFunction('location')