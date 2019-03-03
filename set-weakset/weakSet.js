// Não previne os seus elementos de serem coletados pelo Garbage Collector
// Só é possível adicionar objetos
// Não é iterável
// Não há como remover todos os elementos de uma vez

var firstMusic = {
    title: 'O amor não tem rollback',
    author: 'SQL'
}

var playlist = new WeakSet([firstMusic])
console.log(playlist.has(firstMusic)) // true
playlist.delete(firstMusic)
console.log(playlist.has(firstMusic)) // false