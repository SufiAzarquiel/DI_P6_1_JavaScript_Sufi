function Coche(marca, modelo, precio, annoMatriculacion) {
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.annoMatriculacion = annoMatriculacion;
}

let listaCoches = [
    new Coche('dsafsfd', 'A3', 25000, 2018),
    new Coche('Toyota', 'Miata', 35000, 2019),
    new Coche('asdfasf', 'adsfadsf', 45000, 2020),
    new Coche('Volswagen', 'algo', 55000, 2021),
    new Coche('BMW', 'Serie 1', 20000, 2018),
]

console.log("Antes de la rebaja: ")
for (let coche of listaCoches) {
    console.log(coche)
}

const rebajaCoches = (arr_coches, descuento_porciento) => {
    return arr_coches.map((coche) => {
        coche.precio = coche.precio * (100 - descuento_porciento) / 100
    })
}

rebajaCoches(listaCoches, 10)

console.log("Después de la rebaja: ")
console.log(listaCoches)