/*Ejercicio 1: Repetir una palabra N veces
📌 Solicita al usuario una palabra y un número usando prompt. Luego, crea una función que reciba ambos valores como parámetros, 
repita la palabra N veces utilizando un bucle, y retorne el resultado completo como una cadena de texto. Muestra el resultado con alert. */

function repetirPalabra(palabra, vecesRepetir){
    let resultado = "";
    for(let i = 0; i < vecesRepetir; i++){
        resultado += `${palabra} `
    }
    return resultado.trim(); //trim elimina espacios en los extremos
}

function mostraRrPalabra(){
    let input01 = document.getElementById("input1");
    let palabra = input01.value;
    let numero = parseInt(prompt("Ingrese cantidad a repetir"));

    let resultadoFinal = repetirPalabra(palabra, numero)
    document.getElementById("resultado1").textContent = resultadoFinal;
}
/*Ejercicio 2: Comparar dos números
📌 Usa input para pedir dos números. Crea una función con dos parámetros que compare los valores y retorne un mensaje indicando cuál número es mayor, 
menor o si son iguales. Muestra el mensaje en html*/

