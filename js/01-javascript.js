
/* -------------VARIABLES-------------- 

let nombre = "Uriel";
let apellido = "Moreno";
let nombreApellido = nombre + " " + apellido;

let anioActual = 2024;
let anioNacimiento = 1991;
let edad = anioActual - anioNacimiento;

/* ------------- CONSTANTES ---------------- 

const IVA = 16;

console.log(edad);


/* ---------  PROMPT ventana emergente ------------ 

let nombreUsuario = prompt("ingresar nombre");

console.log(nombreUsuario); 


// -----------  CONDICIONALES Y OPERADORES LÓGICOS ---------  */

// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < > <= >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)


// let edad = prompt("ingresar edad");

// if (edad >= 18) {
//     alert("Eres mayor de edad, puedes ingresar");
// } else {
//     alert("Eres menor de edad, no puedes ingresar");
// }


// let hora = prompt("ingrese la hora");

// if (hora >= 6 && hora < 12) {
//     alert("Buenos días");
// } else if (hora >= 12 && hora < 20) {
//     alert("Buenas tardes");
// } else {
//     alert("Buenas noches");
// }


// let User1 = ("Aleks");
// let User2 = ("More");

// let nameUser = prompt("Ingresar nombre de usuario");

// if (nameUser == "Aleks" || nameUser == "More") {
//     alert("Bienvenido" + " " + nameUser);
// } else {
//     alert("Usuario incorrecto")
// }


// ------ Ejercicios de página web makeitrealcamp.com

// console.log("Y \el dijo \"hola mundo\"");

// console.log(1 + 2);
// console.log(20 + 30);
// console.log(2 * 3 + 10);
// console.log(2 * (3 + 10));

// console.log("\Palabras: \"Agua\", \"Tierra\"");

// console.log(3 + "3");


// ------- CONDICION    -WHILE- ----------

// let x = 1;
// while (x < 15){
//     console.log(x);
//     ++x;
// } 


// --------- FUNCIONES DECLARADAS ---------------

// function agregarALCarrito() {
//     console.log("agregado al carrito");
// }
// agregarALCarrito();


//===================================================================================


// -------- OBJETOS -------------

// const usuario1 = {
//     nombre: "Uriel",
//     edad: "32",
//     nacionalidad: "Mexicana",
//     hobbies: {
//         primero: "dibujar",
//         segundo: "cantar"
//     }
// }
// console.log(usuario1.hobbies.primero);


// ------------ CONSTRUCTOR ------------

// function Producto(talla, color, precio) {

//     this.talla = talla;
//     this.color = color;
//     this.precio = precio;
// }

// const producto1 = new Producto("grande", "verde", 150);
// const producto2 = new Producto("chica", "rojo", 200);
// console.log(producto1);
// console.log(producto1);


// ------------------ CLASES -------------------

// class Producto {
//     constructor(talla, color, precio) {

//         this.talla = talla;
//         this.color = color;
//         this.precio = precio;

//     }
// }

// const producto1 = new Producto("grande", "negro", "200");
// console.log(producto1);

// ------------------ METODOS -------------------

// class Persona {
//     constructor(nombre, edad, nacionalidad) {

//         this.nombre = nombre;
//         this.edad = edad;
//         this.nacionalidad = nacionalidad;

//         this.cumpleanios = function() {this.edad++} ; //metodos

//     }
// }

// const persona1 = new Persona("Uriel", "32", "Mexicana");

// persona1.cumpleanios();
// console.log(persona1);


 