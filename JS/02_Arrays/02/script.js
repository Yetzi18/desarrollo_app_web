console.log("Conexión Establecida correctamente con js!");
// Crea una función que sume el primer y el último elemento de un 
// arreglo de números y muestre el resultado con un alert.

function sumaExtremos(){
    let numero = [12, 34, 56, 78];
    let suma = (numero[0]+numero[numero.length - 1]);
    alert("La suma del  primer y el último elemento es: " + suma)
}
