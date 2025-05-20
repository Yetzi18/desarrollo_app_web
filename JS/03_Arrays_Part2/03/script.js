console.log("Conexión Establecida con js!");
//Accede a dos valores específicos dentro de la matriz utilizando sus posiciones.
//Realiza la suma de ambos valores.
//Muestra el resultado mediante alert() con un mensaje explicativo.

function sumaValores(){
    let matriz = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90] ];
    let sumaMatriz = (matriz[0][1] + matriz[2][1]);
    alert("La suma es: " + sumaMatriz) 
}