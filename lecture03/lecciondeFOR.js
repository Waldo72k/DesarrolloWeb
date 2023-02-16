
// let x = 0;
// do{
// console.log(persona.ingresos[x]);
// x++;
// } 
// while(
//     x < 4
// );

// for(let i = 0; i < persona.ingresos.length; i++){
//     console.log(persona.ingresos[i])
// }

// for(let ingresos of persona.ingresos){
//     console.log(ingresos)
// }

// for(let ingresos in persona.ingresos){
//     console.log(ingresos)
// }

const alicia = {
    //key   value
    nombre: "Alicia",
    edad: 40,
    ingresos: [1000, 500, 1200, 300],

};

const melanie = {
    //key   value
    nombre: "Melanie",
    edad: 33,
    ingresos: [100, 5300, 4200, 3600],

};

const waldo = {
    //key   value
    nombre: "Waldo",
    edad: 72,
    ingresos: [7000, 5300, 7200, 2200],

};

const lista = [alicia, melanie, waldo];

// lista.forEach(element => console.log(element.nombre))

//los mapas los vas a poner cuando tengas una lista
let edades = lista.map(
x => {
  return x.edad 
 }    
)

console.log(edades)

let x = 0;
lista.forEach(element => (x = x + element.edad))
console.log(x / 3)