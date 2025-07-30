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

// Creación de funcion par guardar numeros impares en una lista y mostrarlos 
function filtrarImpares(limite){ // función recibe parametro limite 
    let listaimpar = [];
    for(let i = 1; i <=  limite; i++){
        if (i % 2 !== 0) //condición para guardar los numeros impares en la lista 
        {
            listaimpar.push(i);
        }     
    }
    console.log("Los numeros impares dentro de: " + limite + " son: " + listaimpar);//mostrar resultados en la consola 
    alert("Busqueda de numeros impares exixtosa. Preciona aceptar para ver.");
    return listaimpar; //retornar el contenido de la lista 
}

function mostrarImpares(){
    let numeroLimite = document.getElementById("input1").value;
    
    let resultadoF = filtrarImpares(numeroLimite); //llama la funcion filtrarImpares y le entrega un valor como parametro 
    document.getElementById("resultado").innerHTML= `<p>Los numeros impares son: ${resultadoF}</p>`;
}




