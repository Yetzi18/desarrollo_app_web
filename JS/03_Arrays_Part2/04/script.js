console.log("Conexión Establecida con js!");
// Suma de dos valores en una matriz de tres niveles
//Accede a un número del primer subarreglo y a otro número que esté en la tercera dimensión (nivel más profundo).
//Suma los dos valores accedidos.
//Muestra el resultado con alert().

function sumaMatriz() {
    let datos = [
    [1, 2, 3, 4],
    [5, 6, [7, 8, [9, 10]]] ];
    let resultado = (datos[0][1]+ datos[1][2][2][1]);
    alert("La suma es: " + resultado)
}