/* Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() y usa un 
for para mostrar los números del 1 hasta ese número. */

function contarHastaN() {
    let n = parseInt(prompt("Ingresa el núemro hasta donde quieres contar: "));
    let numeros = [];

    for (let i =1; i <= n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado").innerHTML = `<p>El conteo de 1 hasta ${n} es el siguiente:</p><br><strong>${numeros.join(" - ")}</strong>`;

}

/*Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla. */

function sumaNumeros() {
    let i = 1;
    let numeros = []; 

    while (i <= 5) {
        let n = parseInt(prompt("Ingresa un núemro : "));
        numeros.push(n)
        i++;
    }
    let suma = numeros[0] + numeros[1] + numeros[2] + numeros[3] + numeros[4];
    document.getElementById("resultado").innerHTML = `<p>La suma de los números es: </p><br><strong>${numeros.join(" + ")} = ${suma}</strong>`;
}

/*Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los números pares del 1 al 20. */
