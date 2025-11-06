function validarFormulario() {
    const lenguajes = document.querySelectorAll('input[name="lenguajes"]:checked');
    const experiencia = document.querySelector('input[name="experiencia"]:checked');
    const canales = document.getElementById('canales').selectedOptions;

    let errores = [];

    if (lenguajes.length === 0) {
        errores.push('Debe seleccionar al menos un lenguaje');
    }

    if (!experiencia) {
        errores.push('Debe seleccionar su nivel de experiencia');
    }

    if (canales.length === 0) {
        errores.push('Debe seleccionar al menos un canal de aprendizaje');
    }

    return errores;
}

function obtenerLenguajes() {
    const checkboxes = document.querySelectorAll('input[name="lenguajes"]:checked');
    let lenguajes = [];
    
    for (let i = 0; i < checkboxes.length; i++) {
        lenguajes.push(checkboxes[i].value);
    }
    
    return lenguajes;
}

function obtenerCanales() {
    const select = document.getElementById('canales');
    let canales = [];
    
    for (let i = 0; i < select.selectedOptions.length; i++) {
        canales.push(select.selectedOptions[i].value);
    }
    
    return canales;
}

function generarRecomendacion(cantidadLenguajes, experiencia) {
    let recomendacion = '';

    if (cantidadLenguajes >= 3) {
        recomendacion = 'Te recomendamos profundizar en fundamentos antes de sumar más lenguajes.';
    } else {
        recomendacion = 'Te sugerimos explorar proyectos guiados con los lenguajes que ya conoces.';
    }

    if (experiencia === 'Inicial') {
        recomendacion += ' Como principiante, enfócate en los conceptos básicos.';
    } else if (experiencia === 'Intermedio') {
        recomendacion += ' Con tu nivel intermedio, es buen momento para proyectos más complejos.';
    } else {
        recomendacion += ' Con tu experiencia avanzada, considera contribuir a proyectos open source.';
    }

    return recomendacion;
}

function generarReporte(datos) {
    const cantidadLenguajes = datos.lenguajes.length;
    const listaLenguajes = datos.lenguajes.join(', ');
    const listaCanales = datos.canales.join(', ');
    const recomendacion = generarRecomendacion(cantidadLenguajes, datos.experiencia);

    return `
        <div class="resultado">
            <h3>Resumen de tu Encuesta</h3>
            
            <div class="seccion">
                <strong>Lenguajes:</strong><br>
                Has seleccionado ${cantidadLenguajes} lenguaje${cantidadLenguajes !== 1 ? 's' : ''}: ${listaLenguajes}
            </div>

            <div class="seccion">
                <strong>Experiencia:</strong><br>
                Nivel ${datos.experiencia.toLowerCase()}
            </div>

            <div class="seccion">
                <strong>Canales de aprendizaje:</strong><br>
                ${listaCanales}
            </div>

            ${datos.comentarios ? `
            <div class="seccion">
                <strong>Comentarios:</strong><br>
                "${datos.comentarios}"
            </div>
            ` : ''}

            <div class="recomendacion">
                <strong>Recomendación:</strong><br>
                ${recomendacion}
            </div>
        </div>
    `;
}

function mostrarError(errores) {
    document.getElementById('resultado').innerHTML = `
        <div class="error">
            <strong>Errores:</strong><br>
            • ${errores.join('<br>• ')}
        </div>
    `;
}

function actualizarContador() {
    const textarea = document.getElementById('comentarios');
    const contador = document.getElementById('charCounter');
    const longitud = textarea.value.length;

    contador.textContent = `${longitud} / 200`;
    
    if (longitud > 180) {
        contador.classList.add('warning');
    } else {
        contador.classList.remove('warning');
    }
}

document.getElementById('encuestaForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const errores = validarFormulario();
    
    if (errores.length > 0) {
        mostrarError(errores);
        return;
    }

    const datos = {
        lenguajes: obtenerLenguajes(),
        experiencia: document.querySelector('input[name="experiencia"]:checked').value,
        canales: obtenerCanales(),
        comentarios: document.getElementById('comentarios').value.trim()
    };

    document.getElementById('resultado').innerHTML = generarReporte(datos);
});

document.getElementById('limpiarBtn').addEventListener('click', function() {
    document.getElementById('encuestaForm').reset();
    document.getElementById('resultado').innerHTML = '';
    actualizarContador();
});

document.getElementById('comentarios').addEventListener('input', actualizarContador);

// Inicializar contador
actualizarContador();