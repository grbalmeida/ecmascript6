/* 
    Os elementos processados pelo forEach são determinados
    antes da primeira invocação da função de callback
*/

var names = ['Maria', 'José', 'João']

names.forEach(printName)

function printName(name) {
    console.log(name)
}

var channels = ['Globo', 'Sbt', 'Record']

channels.forEach(function(channel) {
    channels.push('RedeTV') // este item sera ignorado
    console.log(channel)
})

console.log(channels)
// ['Globo', 'Sbt', 'Record', 'RedeTV', 'RedeTV', 'RedeTV']