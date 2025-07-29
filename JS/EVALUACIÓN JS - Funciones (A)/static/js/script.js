/*Ejercicio 2: Creación de función con parámetros y botón

Crea un programa en JavaScript que cumpla los siguientes requisitos:
    Debe existir un input de texto en HTML donde el usuario ingrese un número.
    Un botón debe ejecutar una función que reciba como parámetro el número ingresado y retorne todos los números impares desde 1 hasta el número dado.
    El resultado debe mostrarse con alert y en la consola usando console.log.
    Usa for, if y lógica con return para generar los valores.
    Publica el proyecto en GitHub y adjunta una captura de pantalla de la ejecución.

Ejemplo esperado:
Si el usuario ingresa 10, el resultado debe ser:
1, 3, 5, 7, 9 */


function filtrarImpares(limite){
    let listaimpar = [];
    for(let i = 1; i <=  limite; i++){
        if (i % 2 !== 0)
        {
            listaimpar.push(i);
        } 
        console.log("Los numeros impares dentro de: " + limite + " son: " + listaimpar);    
    }
    alert("Numeros impapres:" + listaimpar); 
    return listaimpar;
}

function mostrarImpares(){
    let numeroLimite = document.getElementById("input1").value;
    // let nuemroMultiplo = document.getElementById("input2").value;
    let resultadoFinal = filtrarImpares(numeroLimite);
    
}




