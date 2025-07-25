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

function compararNumeros(num1, num2){
    if (num1 > num2){
        return`${num1} es mayor que ${num2}`;
    } else if (num1 > num2){
        return`${num1} es menor que ${num2}`;
    } else {
        return`${num1} es igual que ${num2}`;
    }    
}

function mostarComparacion(){
    let input1 = document.getElementById("numComp1");
    let input2 = document.getElementById("numComp2");
    let num1 = parseFloat(input1.value);
    let num2 = parseFloat(input2.value);
    let resultado = compararNumeros(num1, num2);
    document.getElementById("resultado2").textContent = resultado;
}

/*Ejercicio 3: Verificar si un número es par o impar
📌 Solicita un número usando input. Diseña una función que reciba ese número como parámetro, 
determine si es par o impar, y retorne un mensaje con el resultado. Muestra ese mensaje al usuario  en html  . */

function parOImpar(numero){
    if (numero %2 === 0){
        return`El numero ${numero} es par`;
    }else {
        return`El numero ${numero} es impar`;
    }
}

function pares(){
    const inputNum = document.getElementById("input3");
    const num = parseInt(inputNum.value);
    if (isNam(num) || num === 0){
        document.getElementById("resultado3").textContent = "Valor inválido, ingrese números validos"
        return
    }
    let resultado = parOImpar(num);
    document.getElementById("resultado3").textContent = resultado;

    inputNum.value = ""; //limipia la caja de texto 
    inputNum.focus(); // poner foco en elemento 
}

/*Ejercicio 4: Validar si un número es primo
📌 Captura un número usando input. Luego, crea una función que reciba ese número como parámetro y retorne
un mensaje indicando si el número es primo o no. Muestra el resultado con html  .*/

function esPrimo(numeroPrimo) {
    if (numeroPrimo <= 1){
        return `El numero ${numeroPrimo} no es primo`
    }
    for (let i = 2; i < numeroPrimo; i++){
        if (numeroPrimo % i === 0)
            return `El numero ${numeroPrimo} no es primo`
    }
    return `El número ${numeroPrimo} es primo`;
}


function verificarNumeroPrimo() {

    const inputPrimo = document.getElementById("numeroPrimo");
    const numeroPrimo = parseInt(inputPrimo.value);
    if(isNaN(numeroPrimo) || numeroPrimo <= 0){
        document.getElementById("resultado4").innerText = "Entrada inválida. ingrese un numero o un número mayor a 0.";
        return;
    }
    resultado = esPrimo(numeroPrimo)
    document.getElementById("resultado4").innerText = `${resultado}`;
    inputPrimo.value = ""
    inputPrimo.focus()
}

/*Ejercicio 5: Calcular potencia con bucle
📌 Pide al usuario una base y un exponente mediante input. Usa una función que reciba ambos valores como parámetros, 
calcule la potencia utilizando un bucle, y retorne el resultado. Finalmente, muestra el valor calculado en html. */

function CalcularPotencias(numeroBase, potencia){
    let i = 1
    let resultado = 1 
    while(i <= potencia){
        resultado *= numeroBase 
        i++ 
    }
    return resultado
}

function PotencialConBucle(){
    const inputPontencia = document.getElementById("potencia");
    const inputNumero = document.getElementById("numeroBase");
    const potencia = parseInt(inputPontencia.value);
    const numeroBase = parseInt(inputNumero.value);
    if (isNaN(numeroBase) || isNaN(potencia)){
        document.getElementById("resultado5").innerText = "Entrada inválida.Ingrese un numero.";
        return
    }

    resultado = CalcularPotencias(numeroBase, potencia);
    document.getElementById("resultado5").innerText = `El resultado de ña potencia es: ${numeroBase}^${potencia} = ${resultado}`;
    inputPontencia.value = ""
    inputPontencia.focus()
    inputNumero.value =""
}