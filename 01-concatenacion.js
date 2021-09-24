let nombre = "D'Angelo";

let apellido = "Rivera";

let nombrecompleto = nombre +""+ apellido
console.log(nombrecompleto);

//template string/ template literal
//Backticks``
//${aqui adentro, podemos poner codigo de js}
let texto = `Hola soy ${nombre}${apellido} y soy de Junin`;

console.log(texto);

//PROMPT, capturar datos, del usuario
let cantidadMascotas = prompt("cuantas mascotas tienes?")

console.log(`Mascotas : ${cantidadMascotas}`);
console.log(typeof cantidadMascotas);//todo lo ingresado en un prompt es string
//let convertido = +cantidadMascotas;
let convertido=parseInt(cantidadMascotas);

console.log(typeof convertido);



