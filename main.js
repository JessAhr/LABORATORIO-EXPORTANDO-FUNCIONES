
//const prompt  = require ("prompt-sync")();

import { PI, IVA, _DIAS_SEMANA} from './constantes.js'

console.log("---Area de un circulo---");
const radio= 5; 
const area = PI * radio ** 2;
console.log(`Area del circulo: ${area}`);

console.log("---Calcular precio con IVA---");
const precio = 200;
const pecrioConIVA  = precio + (precio * IVA);
console.log (`Precio con IVA¨: ${pecrioConIVA} `);

console.log ("---Dia de la semana---");
console.log(`El tercer día de la semana es: ${_DIAS_SEMANA[2]}`);

// Ejercicio 2: Exportar Funciones Matemáticas
//  1. En operaciones-matematicas.js, exportar:- sumar(a, b)- restar(a, b)- multiplicar(a, b)
// - areaCirculo(radio) (usar PI importado)
//  Tareas:
//  1. Importar las 4 funciones en main.js
//  2. Usar cada función con valores de ejemplo y mostrar resultados

console.log ("---Operaciones matematicas---");

import { sumar, restar,multiplicar,areaCirculo } from './operacionesMatematicas.js';

console.log('Suma de 12 + 7 =', sumar(12, 7));                  
console.log('Resta de 20 - 6 =', restar(20, 6));              
console.log('Multiplicación de 9 * 7 =', multiplicar(9, 7));  
console.log('Área de círculo con radio 7 =', areaCirculo(7)); 

//  Ejercicio 3: Calculadora de Impuestos
//  1. En constantes.js, agregar:- DESCUENTO = 0.1 (10%)
//  2. En operaciones-matematicas.js, exportar:- calcularTotal(precio, cantidad)- aplicarImpuestos(total) (usar IVA)- aplicarDescuento(total) (usar DESCUENTO)
//  En main.js:
//  •Importar las constantes y funciones necesarias.
//  •Calcular:
//  •Precio total de 3 productos.
//  •Aplicar impuestos al total.
//  •Aplicar descuento al total con impuestos.
//  •Mostrar todos los pasos intermedios y el resultado final

console.log ("---Calculadora de impuestos---")

import { calcularTotal, aplicarImpuestos, aplicarDescuento } from './operacionesMatematicas.js';

const precioUnitario = 7000;
const cantidad = 5;

const totalSinImpuestos = calcularTotal(precioUnitario, cantidad);
console.log(`Total sin impuestos (100 * 3) = ${totalSinImpuestos}`);

const totalConIVA = aplicarImpuestos(totalSinImpuestos);
console.log(`Total con IVA (19%) = ${totalConIVA}`);

const totalFinal = aplicarDescuento(totalConIVA);
console.log(`Total final con descuento (10%) = ${totalFinal}`);






