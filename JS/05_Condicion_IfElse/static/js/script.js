/* Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra
"Acceso permitido".
Si no, muestra "Acceso denegado". */

function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        //document: me permite acceder al codigo html
        //getElementById: tomar un elemento desde el id 
        //innerHTML: inserta un elemento html dentro del id
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
    } else {
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
        cola.shift();
        document.getElementById("resultado").innerHTML = `<p>Nuevo Arreglo: <strong>${cola.join(" - ")}</strong> .</p>`;
    } else {
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
        saludos.push(nombre);
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
// > mayor que
// < menor que
function calificacion(){
    let nota = parseInt(prompt("Ingrese la nota: "));
    if (nota >= 6 && nota <= 7) {
        document.getElementById("resultado").innerHTML = `<p>Excelente: ${nota}.</p>`;
        console.log("Excelente");
    } else if (nota >= 4 && nota <= 6)  {
        document.getElementById("resultado").innerHTML = `<p>Aprobado: ${nota}.</p>`;
    } else if (nota < 4 && nota >= 1) {
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
    let nombre = prompt("Ingrese su nombre: ");
    
    if (nombre != ""){
        visitas.unshift(nombre)
        document.getElementById("resultado").innerHTML = `<p>Visita: ${visitas.join(" : ")}.</p>`;
    } else {
        document.getElementById("resultado").innerHTML =`<p>Erro: nombre vacío</p>`;
    }

}

/*Ejercicio 8: Control de stock
js
let stock = ["arroz", "fideos"];

Declara la variable productoSolicitado.
Si stock incluye el producto, muestra "Producto disponible".
Si no, agrégalo con push() y muestra "Producto agregado al stock". */

function controlStock(){
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Ingrese el producto que solicita");
    if (stock[0] == productoSolicitado){
        document.getElementById("resultado").innerHTML =`<p>Producto disponible: <strong>${productoSolicitado}</strong>.</p>`;

    } else if(stock[1] == productoSolicitado){
        document.getElementById("resultado").innerHTML =`<p>Producto disponible: <strong>${productoSolicitado}</strong>.</p>`;

    } else{
        stock.push(productoSolicitado);
        document.getElementById("resultado").innerHTML = `<p>Producto agregado al stock: <strong>${stock.join(" - ")}</strong>.</p>`;
    }
}

/*Ejercicio 9: Lista de invitados
js
let invitados = ["Ana", "Luis", "Camila"];

Declara la variable persona.
Si la persona está en el arreglo, muestra "Bienvenido, [nombre]".
Si no, muestra "No estás en la lista".
 */

function listaInvitados(){
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("Ingrese su nombre: ");

    /*if (invitados[0] || invitados[1] || invitados[2] ){*/
    if (invitados.includes(persona)){  
        document.getElementById("resultado").innerHTML = `<p>Bienvenido, ${persona} </p>`;
    }
    else if (!invitados.includes(persona)){
        document.getElementById("resultado").innerHTML = `<p>No estás en la lista: ${persona} .</p>`;
    }
    else{
        document.getElementById("resultado").innerHTML =`<p>Error valor Invalido</p>`;
    }
}


/*Ejercicio 10: Evaluar rol de usuario
js
let usuarios = ["Admin", "Editor", "Invitado"];
Declara la variable rol.
Si rol === "Admin", agrégalo al inicio con unshift() y muestra "Rol prioritario agregado".
Si es otro rol, usa push() y muestra "Rol agregado". */

function eveluarUser(){
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Ingrese su rol (Admin, Editor, Invitado): "); 

    if (rol === usuarios[0]){
        usuarios.unshift(rol);
        document.getElementById("resultado").innerHTML = `<p>Rol prioritario agregado  ${usuarios.join(" - ")}.</p>`;

    } else {
        usuarios.push(rol);
        document.getElementById("resultado").innerHTML = `<p>Rol agregado ${usuarios.join(" - ")}</p>`;
    }
}