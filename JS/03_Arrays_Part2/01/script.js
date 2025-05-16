console.log("Conexión Establecida con js!");
//Usa los elementos del arreglo para construir una frase coherente y completa.
//Utiliza alert() para mostrar la frase resultante.
//Puedes agregar conectores o palabras que no estén en el arreglo (por ejemplo, "en", "el", etc.).

function  fraseCoherente(){
    let palabras =[
        ["Juan ", "corre ", "rápidamente ", "feliz ", "parque "],
        [ "en ", "el ", "por "] ];
    let mensaje = (palabras[0][0] + palabras[0][1] + palabras[0][3] + palabras[0][2] + palabras[1][2] + palabras[0][4]);
    alert("Frase coherente y completa: " + mensaje);
}