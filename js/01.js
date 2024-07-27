

// TEMPLATE STRINGS - FORMA SIMPLE DE CONCATENAR VARIABLES Y FUNCIONES

//  const nombre = "Uriel";
//  const apellido = "Moreno";

//  console.log(`Usuario: ${nombre} Apellido: ${apellido}` );



//========================================================


// OBJETOS sintaxis comun-----------

// const producto = {
//     nombreProducto : "Monitor",
//     precio : 500,
//     disponible : true,
// }


// Agregar nuevas propiedades-------

// producto.imagen = "imagen.jpg";

// Eliminar propiedades------------

// delete producto.precio;

// console.log(producto);


// Destructuring = para extraer informacion de variables------------

// const producto = {
//     nombreProducto : "Monitor",
//     precio : 500,
//     disponible : true,
// }

// const {precio, nombreProducto} = producto;

// console.log (precio);
// console.log (nombreProducto);



// "use strict"; // Corre JS en modo estricto y muestra errores----------

const producto = {
    nombreProducto : "Monitor",
    precio : 500,
    disponible : true,
}

// Object.freeze(producto); // objetos funcion --- Object.freeze(); -----no permite agregar ni eliminar propiedades, ni cambiar valores
// Object.seal(producto); // objetos funcion --- Object.seal(); -----no permite agregar ni eliminar propiedades, pero si deja modificar propiedades de variables existentes

producto.imagen = "imagen.jpg";

console.log(Object.isFrozen(producto)); // se utiliza para saber si esta congelado (freeze) el resultado es true o false
console.log(Object.isSealed(producto)); // se utiliza para saber si esta sellado (seal) el resultado es true o false

console.log(producto);



let nombre = "ALejandro"


