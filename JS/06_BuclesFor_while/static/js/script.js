/* Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() y usa un 
for para mostrar los números del 1 hasta ese número. */

function contarHastaN() {
    let n = parseInt(prompt("Ingresa el núemro hasta donde quieres contar: "));
    let numeros = [];

    for (let i =1; i <= n; i++){
        numeros.push(i);
    }
    document.getElementById("resultado1").innerHTML = `<p>El conteo de 1 hasta ${n} es el siguiente:</p><br><strong>${numeros.join(" - ")}</strong>`;

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
    document.getElementById("resultado2").innerHTML = `<p>La suma de los números es: </p><br><strong>${numeros.join(" + ")} = ${suma}</strong>`;
}

/*Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los números pares del 1 al 20. */

function mostrarPar(){
    let listaPar = [];
    for (let n = 1; n <= 20; n++){
        if (n % 2 === 0){
            listaPar.push(n);
            alert(n + " es par");
        }
    }
    document.getElementById("resultado3").innerHTML = `<p>Los numeros son: ${listaPar.join(" , ")}</p>`;
}



/* Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido". */

let lista = []
function contadorRegresivo() {
    let numero = parseInt(prompt("Ingrese un numero para la cuenta regresiva: "));
    if (numero === 0) {
        alert("Numero no valido");
    }
    while (numero >= 0) {
        // alert(numero);
        lista.push(numero);
        numero--;
    };
    document.getElementById("resultado4").innerHTML = `<p>${lista.join("- ")}</p>`;

};

/*Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10. */

function mostrarTablaMultiplicar(){
    let resultado = "";
    let numero = parseInt(prompt("Ingrese numero para trabajar"));
    for ( let i = 1; i <= 10; i++){
        let mult = numero * i;
        resultado += `<p>${numero} x ${i} = ${mult}</p>`

    }
    document.getElementById("resultado5").innerHTML = resultado;
}

/*Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado. */

let sumaAcumulada = [];

function sumaHastaCero(){
    let suma = 0;
    let numero;
    document.getElementById("resultado6").innerHTML = "";
    while (true){
        numero = parseFloat(prompt("Introduce un numero para sumar (0 para termianar"));
        if (isNaN(numero)){
            document.getElementById("resultado6").innerHTML = "<p>Por favor, introduce un numero valido.</p>";
            return
        }
        if (numero === 0){
            break
        }
        suma += numero
        sumaAcumulada.push(numero)
        document.getElementById("resultado6").innerHTML = `<p> Numeros sumados: <strong>${ sumaAcumulada.join(", ")}</strong></p>`;
    }
}

/*Ejercicio 7: Mostrar letras de una palabra
Pide al usuario una palabra y usa un for para mostrar cada letra por separado en el HTML. */
function mostrarLetras() {
    let palabra = prompt("Ingrese una palabra: ")
    if (palabra) {
        for (let i = 0; i < palabra.length; i++) {
            document.getElementById("resultado7").innerHTML +=
            `<p>Letra ${i + 1}: ${palabra[i]}</p>`;
        };
    };
};

// Ejercicio 8
function pedirClave() {
    let contrasena;
    while (contrasena !== "admin123") {
        contrasena = prompt("Ingrese la contraseña: ");
    }
    alert("Acceso concedido");
    document.getElementById("resultado8").innerHTML +=
            `<p>Acceso concedido</p>`;
};

// Ejercicio 9
function pedirNotas() {
    let cantidad = parseInt(prompt("¿Cuántas notas va a ingresar?"));
    let total = 0;

    for (let n = 1; n <= cantidad; n++) {
        let nota = parseFloat(prompt("Ingrese la nota " + n + ":"));
        total += nota;
    }

    let promedio = total / cantidad;
    alert("El promedio es: " + promedio);
    document.getElementById("resultado9").innerHTML +=
            `<p>El promedio es: ${promedio}</p>`;
};

// Ejercicio 10
function contarMayores() {
    let cantidad = parseInt(prompt("¿Cuántas personas va a ingresar?"));
    let mayores = 0;

    for (let n = 1; n <= cantidad; n++) {
        let edad = parseInt(prompt("Ingrese la edad de la persona " + n + ":"));
        if (edad >= 18) {
            mayores++;
        };
    };

    alert("Cantidad de personas mayores de edad: " + mayores);
    document.getElementById("resultado10").innerHTML +=
            `<p>Cantidad de personas mayores de edad: ${mayores}</p>`;
};