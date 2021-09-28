//L cantidad de litros que produce ENTERO
//PG precio del galón REAL
//TG cantidad de galones que produce REAL
//GA ganancia por la entrega de leche REAL


//1 galon = 3.785 litros


let precioGalone = +prompt("Cuánto es el precio del galón de leche?");

let cantidadGalones = +prompt("Cuántos galones se vendieron");

const galonexlitro = 3.785;

let conversionAlitros = cantidadGalones * galonexlitro;

let ganancia = precioGalone * conversionAlitros;

window.alert(`Recibira ${ganancia} PEN por la entrega de produccion de hoy.`);