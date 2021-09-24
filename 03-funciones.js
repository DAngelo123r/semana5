
function calcularAreaTriangulo(base, altura){//ponemos codigo q se va ejecutar
//cuando invoquemos /llamemos/ejecutemos esta función
let area = base*altura/2;
//a) indica q va devolver mi función
//b) termina la ejecución de mi función
return area;
//ámbito local solamente dentro de la función
}
let resultado = calcularAreaTriangulo(50,15);
let resultado2= calcularAreaTriangulo(100,25);
console.log(resultado);
console.log(resultado2);
//ámbito global todo el documento
