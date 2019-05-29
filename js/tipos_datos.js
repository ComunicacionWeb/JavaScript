'use strict'

//OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert("El resultado de la operación es: "+operacion);


//TIPOS DE DATOS
var num_entero = 44;
var cadena_texto = 'Hola "que" tal';
var verdadero_falso = false;   //verdadero, falso, 0, 1

var num_falso = "33";
/* 	Number(numero_falso)
	parseInt(numero_falso) // para convertir a numero entero
	parseFloat(numero_falso) //para convertir a numero flotante(decimal)
	//estas funciones sirven para convertir el numero que esta en string a un valor numerico
*/
//console.log(String(num_entero)+7);	//convierte la variable en una cadena de texto y concatena con el numero


console.log(typeof num_entero);	//typeof es para ver el tipo de dato que es la variable consultada
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
console.log(typeof num_falso);