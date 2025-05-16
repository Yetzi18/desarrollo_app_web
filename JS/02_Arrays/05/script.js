console.log("Conexión Establecida correctamente con js!");
// Crea una función que sume el segundo y cuarto elemento de un arreglo, 
// y concatene el resultado con una frase personalizada. Muestra el mensaje con alert.

function mensajeConcatenado(){
    let numero = [20, 50, 5, 3, 4];
    let suma = (numero[1]+numero[4]);
    let mensaje = ("HOLA TÙ RESULTADO ES ESTE: ");
    alert(mensaje + suma);
}