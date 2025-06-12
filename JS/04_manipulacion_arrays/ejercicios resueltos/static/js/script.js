//1 actividad
let compras = []; //arreglo vacio

function listaCompras(){
    compras.push("Pam", "Leche", "Huevos");
    alert(`Lista de compras: ${compras.join("-")}`);
}

//2 actividad
function productoEliminado(){
    let eliminado = compras.pop();
    alert(`Elemento eliminado: ${eliminado}`);
}

//3 actividad
let colores = ["rojo", "azul"];

function listaColores(){
    colores.unshift("amarillo");
    alert(`Lista de colores es: ${colores.join("-")}`);
}

//4 actividad
function colorEleminado(){
    let eliminado = colores.shift();
    alert(`Elemento eliminado: ${eliminado}`);
}

//5 actividad

