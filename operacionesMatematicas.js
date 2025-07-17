// Ejercicio 2: Exportar Funciones Matemáticas
//  1. En operaciones-matematicas.js, exportar:- sumar(a, b)- restar(a, b)- multiplicar(a, b)
// - areaCirculo(radio) (usar PI importado)
//  Tareas:
//  1. Importar las 4 funciones en main.js
//  2. Usar cada función con valores de ejemplo y mostrar resultado

import { IVA, PI } from './constantes.js';

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
    return radio * PI **2;
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
    return total + (total * IVA);
    
}

import { DESCUENTO } from './constantes.js';

export function aplicarDescuento(total){
    return total - (total * DESCUENTO);
}

