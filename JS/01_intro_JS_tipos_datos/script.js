//Prueba de conexion
console.log("Conexión Establecida con js!");

//Creación de variables 
let num = 25; //Variable int (numero entero)
let num2 = 25.5; //Variable Decimal
let tex = "HOLA"; //Variable STR
let booleana = true; //Variable booleana
let numArreglo = [1, 2, 3, 4]; //Variable boolean
let nombre = "Mari"; 
let edad = 17;
let valor;
let valor2 = null;
const valor3 = Symbol("id");
let num3 = BigInt(123456789987654321); //varible BigInt
const mes = "Mayo";

//Cresción de función nuemro entero

function numeroEntero() {
    return "Variable numerica:" + num;
}
//Cresción de función nuemro decimal

function numeroDecimal() {
    return "Variable numerica:" + num2;
}
//Cresción de función cadena de texto

function cadenaTexto() {
    return "Texto:" + tex;
}
//Cresción de función valor booleano

function valorBooleano() {
    return "Valor booleano:" + booleana;
}
//Cresción de función arreglo de numnero

function arregloNumeros() {
    return "Arreglo:" + numArreglo;
}
//Cresción de función objeto persona

function objetoPersona() {
    return "Datos de la persona: Nombre " + nombre + "Edad " + edad; //Mostrar objeto 
}
//Cresción de función sin valor
function valorIndefinido() {
    return valor;
}

//Cresción de función valor null
function valorNulo() {
    return valor2;
}

//Cresción de función Symbol
function identificadorUnico() {
    return valor3;
}
//Cresción de función BigInt
function numeroGrande() {
    return num3;
}
//Cresción de función constante de mes 
function mesconstante() {
    return "El mes es:" + mes;
}
console.log("Número Entero:", numeroEntero); //Mostrar numero entero
console.log("Número Entero:", numeroDecimal);  //Mostrar numero decimal
console.log("Número Entero:", cadenaTexto);  //Mostrar texto 
console.log("Valor:", valorBooleano);  //Mostrar valor
console.log("Valores:", arregloNumeros);  //Mostrar Arreglo numerico
console.log("Datos de la persona:", objetoPersona);  //Mostrar datos
console.log("Valor:", valorIndefinido);  //No muestra nada
console.log("Valor:", valorNulo);  //Muetra valor null
console.log("Valor:", identificadorUnico);  //Muetra valor null
console.log("Valor:", numeroGrande);  //Muetra valor big
console.log("Mes:", mesconstante); // mostra valot no modificable
