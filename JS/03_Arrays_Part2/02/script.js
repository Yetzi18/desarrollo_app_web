console.log("Conexión Establecida con js!");
//Construir frase con número, verbo, adverbio, adjetivo y sustantivo
//Accede a los elementos necesarios y ordénalos para formar una frase correcta y completa.
//Concátalos con espacios y muestra la frase con alert().
//Puedes incluir artículos o conectores ("Los", "y", etc.) según sea necesario.
function  fraseCoherente(){
    let datos =[
        [3 , " gatos ", "negros ", "duermen ", "tranquilamente  "],
        [ "en ", "su ", "casa "] ];
    let mensaje = (datos[0][0] + datos[0][1] + datos[0][2] + datos[0][3] + datos[0][4] + datos[1][0] + datos[1][1] + datos[1][2]);
    alert("Frase coherente y completa: " + mensaje);
}
