/* Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra
"Acceso permitido".
Si no, muestra "Acceso denegado". */

function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado").innerHTML =`<p>Es mayor de Edad: ${edad} </p>`;
    }else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado").innerHTML =`<p>Es menor de Edad: ${edad} </p>`;
    } else {
        document.getElementById("resultado").innerHTML =`<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}


/* Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */

function mostrarNuevoProducto(){
    let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");

    if (productos[0] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ya fue ingresado.</p>`;

    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ya fue ingresado.</p>`;

    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado").innerHTML =`<p>El producto: <strong>${nuevoProducto}</strong> ya fue ingresado.</p>`;

    } else{
        productos.push(nuevoProducto);
        document.getElementById("resultado").innerHTML = `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
    }

}

/* Ejercicio 3: Control de tareas
Declara el arreglo tareas con 6 tareas predefinidas.
Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
Si tiene 5 o menos, muestra "Lista aceptable". */

function tareasWeb(){
    let tareas = ["Arrays", "If and ELSE", "Padding", "Margin", "Java Script", "CSS"];
    /*let nuevaTarea = prompt("Ingrese nueva tarea");*/

    if (tareas.length >= 5) {
        tareas.pop()
        document.getElementById("resultado").innerHTML =`<p>Lista modificada: <strong>${tareas.join(" - ")}</strong> .</p>`;
    } else (tareas.length <= 5);{
        document.getElementById("resultado").innerHTML =`<p>Lista aceptable: <strong>${tareas.join(" - ")}</strong> .</p>`;

    }

}

/* Ejercicio 4: Validar primer elemento
js
let cola = ["sinNombre", "Pedro", "Lucía"];

Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
Si no, muestra "Cola correcta". */

function validarElemnto() {
    let cola = ["sinNombre", "Pedro", "Lucía"];
    if (cola[0] == "sinNombre"){
        cola.shift()
        document.getElementById("resultado").innerHTML = `<p>Nuevo Arreglo: <strong>${cola.join(" - ")}</strong> .</p>`;
    } else (cola[0] != "sinNombre");{
        document.getElementById("resultado").innerHTML = `<p>Cola correcta: <strong>${cola.join(" - ")}</strong> .</p>`;
    }
}

/*Ejercicio 5: Saludo condicional
Declara la variable nombre.
Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
Si está vacío, muestra "Nombre no válido". */

function saludo() {
    let nombre = prompt("Ingrese su nombre: ");
    let saludos = ["Hola "];
    if (nombre != ""){
        saludos.push(nombre)
        document.getElementById("resultado").innerHTML = `<p>Saludo: ${saludos.join(" , ")}.</p>`;
    } else{
        document.getElementById("resultado").innerHTML = `<p>Nombre no válido</p>`;
    }
}

/*Ejercicio 6: Calificar nota
Declara la variable nota con un valor entre 1 y 7.
Si nota >= 6: muestra "Excelente".
Si nota >= 4: muestra "Aprobado".
Si nota < 4: muestra "Reprobado". */

function calificacion(){
    let nota = parseInt(prompt("Ingrese la nota: "));
    if (nota >= 6) {
        document.getElementById("resultado").innerHTML = `<p>Excelente: ${nota}.</p>`;
        console.log("Excelente");
    } else if (nota >= 4) {
        document.getElementById("resultado").innerHTML = `<p>Aprobado: ${nota}.</p>`;
    } else if (nota < 4) {
        document.getElementById("resultado").innerHTML = `<p>Reprobado: ${nota}.</p>`;
    } else {
        document.getElementById("resultado").innerHTML =`<p>El valor <strong>${nota}</strong> es invalido.</p>`;
    }

}

/* Ejercicio 7: Registro de visitantes
Crea un arreglo vacío visitas y una variable persona.
Si el nombre no está vacío, usa unshift() para añadirlo al inicio.
Si está vacío, muestra "Error: nombre vacío". */

function registroVisitantes(){
    let visitas = [];
    let persona 


}