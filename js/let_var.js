'use strict' //para obligar a usar los comandos correctamente

//PRUEBAS LET Y VAR

//PRUEBA CON VAR
var numero = 40;
console.log(numero); 	//valor 40

if (true) {
	var numero = 50;
	console.log(numero); 	//valor 50
}

console.log(numero); 	//valor 50

//PRUEBA CON LET
var texto = "Primer prueba con let";
console.log(texto); 	//valor ""

if (true) {
	let texto = "Segunda prueba con let";
	console.log(texto); 	//valor ""
}

console.log(texto); 	//valor primer....  





//var cambia valores a nivel global
//let solo cambia el valor dentro del bloque de texto en el que se ubica