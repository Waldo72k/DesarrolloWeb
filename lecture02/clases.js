//Class in JavaScript

// // class Persona { //las clases llevan objetos, parametros, constructor, operaciones
// //     constructor(nombre,apellido){
// //         this.nombre = nombre;
// //         this.apellido = apellido;
// //     }
// //     quienSoy(){
// //         console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
// //     }
// // }

// // const merik = new Persona("Merik", "X");
// // merik.quienSoy();


//Inheritance
// class Animal {
//     constructor(nombre){
//         this.velocidad = 0;
//         this.nombre = nombre;
//     }
//     empezoAmoverse(velocidad){
//         this.velocidad = velocidad;
//         return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/hr`;
//     }
//     seDetuvo(){
//         this.velocidad = 0;
//         return `${this.nombre} se detuvo y ahora ta sentao mirando`;
//     }
// }

// // let animal = new Animal("animal");
// // console.log(animal.empezoAmoverse(20));
// // console.log(animal.seDetuvo());

// class Perro extends Animal{
//     ladrar(){
//         return `${this.nombre} esta ladrando`
//     }
// }

// const chokys = new Perro("Chokys");
// console.log(chokys.ladrar())
// console.log(chokys.empezoAmoverse(7))
// console.log(chokys.seDetuvo())

// class Persona{ //las clases llevan Pascal case, todo lo demas camelCase
//     constructor(nombre,apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
//     get nombreCompleto (){ //Metodos con camelCase
//         return`${this.nombre} ${this.apellido}`
//     }
//     set nombreCompleto(nombre){
//         const partes = nombre.split(" ");
//         this.nombre = partes[0];
//         this.apellido = partes[1];
//     }
// }

// const merik = new Persona("Merik", "X");
// const nombreActriz = merik.nombreCompleto;
// console.log(`El nombre de la actriz es ${nombreActriz}`)

// const gio = new Persona();
// gio.nombreCompleto = "Giovanni Bonilla"
// console.log(gio)

// //por si quiero darle el valor de giovani a una variable
// const estudiante = gio.nombreCompleto;
// console.log(estudiante)


//Object w get and set
// const objetoDePrueba = { //al momento de usar llaves digo que es objeto (lo hago tipo json)
//     nombre: "Merik",
//     get nombreUsuario(){
//         return this.nombre;
//     },
//     set nombreUsuario(nuevoNombre){
//         this.nombre = nuevoNombre;
//     },
// }

// console.log(objetoDePrueba.nombreUsuario)
// console.log(objetoDePrueba)
// objetoDePrueba.nombreUsuario = "Giovanni";
// console.log(objetoDePrueba.nombreUsuario)
// console.log(objetoDePrueba)

// class User {
//     constructor(name){
//         this.name = name;
//     }
//     static staticProperty = "loquecaiga"
//     static staticMethod() {
//         console.log(this.name)
//     }
// }

// const Waldo = new User("Waldo");
// User.staticMethod();
// console.log(User.staticProperty)

//Esto es el Override
// class Animal {
//         constructor(nombre){
//             this.velocidad = 0;
//             this.nombre = nombre;
//         }
//         empezoAmoverse(velocidad){
//             this.velocidad = velocidad;
//             return `${this.nombre} se mueve con una velocidad de ${this.velocidad} km/hr`;
//         }
//         seDetuvo(){
//             this.velocidad = 0;
//             console.log(`${this.nombre} se detuvo pa`)
//         }
//     }

//     class Perro extends Animal {
//         ladrar(){
//             return `${this.nombre} esta ladrando.`
//         }
//         seDetuvo(){
//             super.seDetuvo();
//             console.log("y se durmio el chokys")
//         }
//     }

//     const perro = new Perro("Chokys");
//     perro.seDetuvo();


//El modo estrictor
// "use strict"
// // mensaje = "Hola, este es un mensaje de prueba";
// // console.log(mensaje)

// a = 10;
// let sumarDos = function(){
//     "use strict";
//     b = 15;
//     return a + b;
// }

// let resultado = sumarDos();
// console.log(resultado);


//FUNCIONES
"use strict"
function nuevoMensaje() {
    console.log(this === undefined)
}

const nuevoMensaje = () => {
    console.log(this === undefined);
}