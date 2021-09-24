//Pedir al usuario sus nombres, apellidos y edad cada uno por separado, el resultado deberia ser un console.log, resumiendo los datos del usuario.

//let nombres = prompt("Cuál es tu nomre?");
//let apellidos = prompt("Cuales son tus apellidos?");
//let edad = prompt("Cuál es tu edad?");

//console.log(`Bienvenid@: ${nombres}${apellidos} de ${edad} años de edad`);
//a) Qué datos necesito?
//rpta: la base y la altura
//b) comó puedo tener esos datos??
//prompt
//c) Esos datos están en la forma q necesito?
//mejor lo convertimos a number


let base = +prompt("Cual es la base del triangulo?")
let altura = +prompt("Cual es la altura del triangulo?")
let resultado = base*altura/2;
console.log(resultado);

//3. preguntar al usuario por dos numeros y mostrar el residuo de la division.

let dividendo = +prompt("Cuál es el dividendo?")
let divisor = +prompt("Cuál es el divisor?")
console.log(`El residuo de dividir ${dividendo} y ${divisor} es ${residuo}`)
let residuo = dividendo % divisor
