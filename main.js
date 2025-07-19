
//  1. Importar PI e IVA en main.js

import { PI, IVA, DIAS_SEMANA} from './constantes.js'

console.log("---Area de un circulo---");
const radio= 5; 
const area = PI * radio ** 2;
console.log(`Area del circulo: ${area}`);

console.log("---Calcular precio con IVA---");
const precio = 200;
const precioConIVA  = precio + (precio * IVA);
console.log (`Precio con IVA: ${precioConIVA} `);

console.log ("---Dia de la semana---");
console.log(`El tercer día de la semana es: ${DIAS_SEMANA[2]}`);

// Ejercicio 2: Exportar Funciones Matemáticas


console.log ("---Operaciones matematicas---");

import { sumar, restar,multiplicar,areaCirculo } from './operacionesMatematicas.js';

console.log('Suma de 12 + 7 =', sumar(12, 7));                  
console.log('Resta de 20 - 6 =', restar(20, 6));              
console.log('Multiplicación de 9 * 7 =', multiplicar(9, 7));  
console.log('Área de círculo con radio 7 =', areaCirculo(7)); 

//  Ejercicio 3: Calculadora de Impuestos
import { calcularTotal, aplicarImpuestos, aplicarDescuento } from './operacionesMatematicas.js';
console.log("----Calculadora de Impuestos----");

const precioUnitario = 7000;
const cantidad = 5;

const totalSinImpuestos = calcularTotal(precioUnitario, cantidad);
console.log(`Total sin impuestos (7000 * 7) = ${totalSinImpuestos}`);

const totalConIVA = aplicarImpuestos(totalSinImpuestos);
console.log(`Total con IVA (19%) = ${totalConIVA}`);

const totalFinal = aplicarDescuento(totalConIVA);
console.log(`Total final con descuento (10%) = ${totalFinal}`);

// Ejercicio 4: Gestión de Usuarios

console.log("----Gestion De Usiarios----");
import { ROLES } from './usuariosCostantes.js';
import { crearUsuario,esAdmin } from './usuarios.js';
const usuario1 = crearUsuario ("Karen", ROLES.ADMIN);
const usuario2 = crearUsuario ("Chris", ROLES.CLIENTE);
console.log("Usuario 1:", usuario1);
console.log("Usuario 2:", usuario2);

console.log("----Aplicar Descuento Por Rol---");

import { aplicarDescuentoPorRol } from './operacionesMatematicas.js';
//Admin
const subtotalAdmin = calcularTotal(25, 4);
const totalImpuestoAdmin = aplicarImpuestos(subtotalAdmin);
const totalFinalAdmin = aplicarDescuentoPorRol(totalImpuestoAdmin, usuario1);

// Cliente compra 3 productos a $50
const subtotalCliente = calcularTotal(50, 3);
const totalImpuestoCliente = aplicarImpuestos(subtotalCliente);
const totalFinalCliente = aplicarDescuentoPorRol(totalImpuestoCliente, usuario2);
console.log("---Descuento Admin 20% ---- ");
console.log("Admin - Subtotal:", subtotalAdmin);
console.log("Admin - Con impuestos:", totalImpuestoAdmin);
console.log("Admin - Con descuento admin :", totalFinalAdmin);

console.log("---Descuento Cliente 10% ---- ");
console.log("Cliente - Subtotal:", subtotalCliente);
console.log("Cliente - Con impuestos:", totalImpuestoCliente);
console.log("Cliente - Con descuento cliente:", totalFinalCliente);


