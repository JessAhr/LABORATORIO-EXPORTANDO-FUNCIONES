// Ejercicio 2: Exportar Funciones Matemáticas
//  1. En operaciones-matematicas.js, exportar:- sumar(a, b)- restar(a, b)- multiplicar(a, b)
// - areaCirculo(radio) (usar PI importado)
//  Tareas:
//  1. Importar las 4 funciones en main.js
//  2. Usar cada función con valores de ejemplo y mostrar resultado

import { IVA, PI } from './constantes.js';
import { DESCUENTO} from './constantes.js';

export function sumar (a,b) {
    return a + b;

}
export function restar (a, b){
    return a - b;
}

export function multiplicar (a,b){
    return a * b;

}


export function areaCirculo (radio) {
    return PI *radio **2;
}

//  Ejercicio 3: Calculadora de Impuestos
//  1. En constantes.js, agregar:- DESCUENTO = 0.1 (10%)
//  2. En operaciones-matematicas.js, exportar:- calcularTotal(precio, cantidad)- aplicarImpuestos(total) 
// (usar IVA)- aplicarDescuento(total) (usar DESCUENTO)
//  En main.js:
//  •Importar las constantes y funciones necesarias.
//  •Calcular:
//  •Precio total de 3 productos.
//  •Aplicar impuestos al total.
//  •Aplicar descuento al total con impuestos.
//  •Mostrar todos los pasos intermedios y el resultado final

export function calcularTotal (precio, cantidad){
    return precio * cantidad;
}

export function aplicarImpuestos(total){
    return total + (1 * IVA);
    
}


export function aplicarDescuento(total){
    return total *(1- DESCUENTO);
}

// 1.En operaciones-matematicas.js, exportar:
//  •aplicarDescuentoPorRol(total, usuario) que:
//  •Si el usuario es admin, aplique un 20% de descuento.
//  •Si es cliente, aplique 10% (usa DESCUENTO de constantes.js).
//  •Retorne el total con el descuento aplicado.
//  2.En main.js:
//  •Importar todas las funciones necesarias (calcularTotal, aplicarImpuestos, etc.).
//  •Escenario:
// •Un admin compra 4 productos a 25 cada uno.
//  •Un cliente compra 3 productos a 50 cada uno.
//  •Para cada caso:
//  •Calcular el subtotal.
//  •Aplicar impuestos (19%).
//  •Aplicar descuento según su rol.
//  •Mostrar resultados detallados en consola

export function aplicarDescuentoPorRol(total, usuario) {
  if (usuario.rol === "admin") {
    return total * 0.8; 
  } else {
    return total * (1 - DESCUENTO); 
  }
}
