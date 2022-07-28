const arrayNumeros = [26, 4, 22, 1, 73, 13, 08]
const arrayNumerosCopia = arrayNumeros.slice()
arrayNumerosCopia.push(100)
console.log(arrayNumeros)
console.log(arrayNumerosCopia)

const arrayTextos = ["Amanari", "Muzenza", "Jaguaruna", "Ipupiara", "Jequitiba"]
const arrayTextosCopia = arrayTextos.slice()
arrayTextosCopia.pop()
console.log(arrayTextos)
console.log(arrayTextosCopia)

const arrayMisto = [13, 26, 08, 22, "Marco", "Borges", "BR"]
const arrayMistoCopia = arrayMisto.slice()
arrayMistoCopia.splice(1,1)
console.log(arrayMisto)
console.log(arrayMistoCopia)
