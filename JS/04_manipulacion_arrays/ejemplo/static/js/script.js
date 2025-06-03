//creacion de arreglos
let array = ["Xbox", "Nintendo"]

//Creacion  de funcion 

function usarPush(){
    //Agregaal final
    let entrada = prompt("Agregaruna consola de juego: ");
    array.push(entrada);
    alert("El nuevo arregelo es: " + array.join(" - "));
}

function usarPop(){
    //Elimina el ultimo elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);
}

function usarUnshift(){
    //Agregaal al inicio
    let entrada = prompt("Agregaruna consola de juego: ");
    array.unshift(entrada);
    alert("El nuevo arregelo es: " + array.join(" - "));
}
function usarShift(){
    //Elimina el primer elemento
    let basurero = array.shift();
    alert(`Elemento eliminado: ${basurero}`);
}