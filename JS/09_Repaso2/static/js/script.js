function mostrarSecuencia(numeroLimite){
    let resultado = []
    for(let i = 1; i <= numeroLimite ; i++)
    {
        if (i % 4 === 0)
        {
            resultado.push(`${i}*`);
        } else{
            resultado.push(i)
        }   
        
    }
    console.log(resultado)
    return resultado
}

function multiplos(){
    inputLimite = document.getElementById("input1")
    limite = parseInt(inputLimite.value)

    let numeros = mostrarSecuencia(limite);

    if (numeros.length === 0) {
        document.getElementById("resultado1").innerText = "No se encontraron múltiplos.";
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }

    inputLimite.value = "";
    inputLimite.focus();
}