const numeroAleatorio = (max) => Math.round(Math.random(0, max) * max)

// calcular 10 premios distintos de lotería de navidad que guardaremos en un Array
/*
Premio 1: 23562
Premio 3: 34189
...
*/
let premios = Array(10)
premios.fill(0)
premios = premios.map((el) => numeroAleatorio(99999))
premios.forEach((el, i) => console.log(`Premio ${i+1}: ${el}`))