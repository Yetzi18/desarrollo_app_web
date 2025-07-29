
function filtrarMultiples(limite, multiplo){
    let listamultiplos = [];
    for(let i = 1; i <=  limite; i++){
        if (i % multiplo === 0)
        {
            listamultiplos.push(i);
        }   

    }
    return listamultiplos;
}

function mostrarMultiplos(){
    let numeroLimite = document.getElementById("input1").value;
    let nuemroMultiplo = document.getElementById("input2").value;

    let resultadoFinal = filtrarMultiples(numeroLimite, nuemroMultiplo)

    document.getElementById("resultado").innerHTML= `<p>Los numeros mulriples son: ${resultadoFinal}</p>`;
}
