console.log("Conexión Establecida con js!");
//Construir frase usando datos de arreglo + matriz
//Accede a un sujeto del arreglo y una acción correspondiente desde la matriz.
//Une ambos con un espacio para construir una frase con sentido completo.
//Muestra la frase mediante alert().

function fraseDatos() {
    let sujeto = ["El perro ", "El gato "];
    let acciones = [
    ["ladra ", "corre "],
    ["duerme ", "salta "] ];
    let frase = (sujeto[0] + acciones[0][0]);
    alert("La frase es: " + frase)
}
