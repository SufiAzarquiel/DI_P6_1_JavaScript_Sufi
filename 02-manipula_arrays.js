const filtrarNumerosPares = (arr) => arr.filter((el) => el % 2 == 0)
let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = filtrarNumerosPares(a)
console.log(a)

const duplicarElementos = (arr) => arr.map((el) => el * 2)
a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
a = duplicarElementos(a)
console.log(a)

const convertirAMayusculas = (arr) => arr.map((el) => el.toUpperCase())
a = ['hola', 'mundo', 'chau']
a = convertirAMayusculas(a)
console.log(a)