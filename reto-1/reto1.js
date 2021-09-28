//L cantidad de litros que produce ENTERO
//PG precio del galón REAL
//TG cantidad de galones que produce REAL
//GA ganancia por la entrega de leche REAL


//1 galon = 3.785 litros


let PG = +prompt("Cuánto es el precio del galón de leche?");

let TG = +prompt("Cuántos galones se vendieron");

const galonexL = 3.785;

let conversionAlitros = TG * galonexL;

let GA = PG * conversionAlitros;

window.alert(`Recibira ${GA} PEN por la entrega de produccion de hoy.`);