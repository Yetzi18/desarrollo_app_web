//Prueba de conexion
console.log("Conexión Establecida con js!");

//Creación de variables 
let num = 25; //Variable int (numero entero)
let num2 = 25.5; //Variable Decimal
let tex = "HOLA"; //Variable STR
let booleana = true; //Variable booleana
let numArreglo = [1, 2, 3, 4]; //Variable boolean
let nombre = "Mari"; 
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
    return "Datos de la persona:" + nombre; //Mostrar objeto 
}

//Impresión en consola 
console.log("Número Entero:", numeroEntero); //Mostrar numero entero
console.log("Número Entero:", numeroDecimal);  //Mostrar numero decimal
console.log("Número Entero:", cadenaTexto);  //Mostrar texto 
console.log("Valor:", valorBooleano);  //Mostrar valor
console.log("Valores:", arregloNumeros);  //Mostrar Arreglo numerico