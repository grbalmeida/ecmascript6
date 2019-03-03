var states = new Set()

states.add('São Paulo')
states.add('Rio de Janeiro')
states.add('Rio de Janeiro')
states.add('Minas Gerais')

console.log(states.values())
// {'São Paulo', 'Rio de Janeiro', 'Minas Gerais'}
console.log(states.keys())
// {'São Paulo', 'Rio de Janeiro', 'Minas Gerais'}

console.log(states.has('São Paulo')) // true
console.log(states.has('Ceará')) // false

states.delete('Rio de Janeiro')

console.log(states.has('Rio de Janeiro')) // false

console.log(`Tamanho: ${states.size}`) // 2
states.clear()
console.log(`Tamanho: ${states.size}`) // 0

var rivers = new Set(['Amazonas', 'São Francisco', 'Amazonas', 'Tietê'])

for(var river of rivers.values()) {
    console.log(river)
}

// Amazonas São Francisco Tietê

var playlist = new Set()

playlist.add('Sem você meu coração é null - Oracle')
playlist.add('Meu coração componentizado - React')
playlist.add('Tudo isso é tão dinâmico - JavaScript')
playlist.add('Não me chame depois... - Node')
playlist.add('O amor não tem Roolback - SQL')

for(var music of playlist) {
    console.log(music)
}

playlist.delete('O amor não tem Roolback - SQL')
playlist.delete('Tudo isso é tão dinâmico - JavaScript')

console.log(playlist.has('Não me chame depois... - Node')) // true
console.log(playlist.has('Meu coração componentizado - React')) // true

console.log(`Quantidade de músicas na playlist: ${playlist.size}`) // 3
playlist.clear()
console.log(`Quantidade de músicas na playlist: ${playlist.size}`) // 0