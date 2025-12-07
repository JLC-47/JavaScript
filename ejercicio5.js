const productos = [
{ id: 1, nombre: "mouse", precio: 50000 },
{ id: 2, nombre: "teclado", precio: 150000 },
{ id: 3, nombre: "monitor", precio: 900000 }
];

const teclado = productos.find(productos => productos.nombre === "teclado");

const mas100000 = productos.find(productos => productos.precio > 100000);

console.log(teclado);
console.log(mas100000);

