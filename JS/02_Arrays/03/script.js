console.log("Conexión Establecida correctamente con js!");
//Crea una función que tome el elemento central de un arreglo y le reste la suma del 
// primer y último elemento. Muestra el resultado con un alert.

function diferenciaCentroExtremos(){
    let numero = [20, 50, 5];
    let suma = (numero[0]+numero[numero.length - 1]);
    let res = (numero[1] - suma);
    alert("El resultado es: " + res);
}