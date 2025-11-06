let registrosEstudiantes = [];

function normalizarNombre(nombre) {
    return nombre.trim()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
        .join(' ');
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const curso = document.getElementById('curso').value;
    const jornada = document.querySelector('input[name="jornada"]:checked');
    const reglamento = document.getElementById('reglamento').checked;

    let errores = [];

    if (!nombre || nombre.trim().length < 2) {
        errores.push('El nombre debe tener al menos 2 caracteres');
    }

    if (!edad || edad < 14 || edad > 100) {
        errores.push('La edad debe estar entre 14 y 100 años');
    }

    if (!curso) {
        errores.push('Debe seleccionar un curso');
    }

    if (!jornada) {
        errores.push('Debe seleccionar una jornada');
    }

    if (!reglamento) {
        errores.push('Debe aceptar el reglamento');
    }

    return errores;
}

function generarResumenJornadas() {
    const conteoJornadas = { Mañana: 0, Tarde: 0 };
    
    for (let i = 0; i < registrosEstudiantes.length; i++) {
        conteoJornadas[registrosEstudiantes[i].jornada]++;
    }

    return `Registrados: ${conteoJornadas.Mañana} en Mañana, ${conteoJornadas.Tarde} en Tarde`;
}

function mostrarResultado(estudiante) {
    const salida = document.getElementById('salida');
    const saludo = `Hola ${estudiante.nombre}, de ${estudiante.edad} años. Has sido registrado en ${estudiante.curso}, jornada ${estudiante.jornada}.`;
    
    salida.innerHTML = `
        <div class="resultado">${saludo}</div>
        <div class="resumen">
            <strong>Resumen:</strong><br>
            ${generarResumenJornadas()}<br>
            Total: ${registrosEstudiantes.length} estudiantes
        </div>
    `;
}

function mostrarError(errores) {
    const salida = document.getElementById('salida');
    salida.innerHTML = `<div class="error">Errores:<br>• ${errores.join('<br>• ')}</div>`;
}

document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const errores = validarFormulario();
    
    if (errores.length > 0) {
        mostrarError(errores);
        return;
    }

    const nuevoEstudiante = {
        nombre: normalizarNombre(document.getElementById('nombre').value),
        edad: parseInt(document.getElementById('edad').value),
        curso: document.getElementById('curso').value,
        jornada: document.querySelector('input[name="jornada"]:checked').value
    };

    registrosEstudiantes.push(nuevoEstudiante);
    mostrarResultado(nuevoEstudiante);
    
    document.getElementById('registroForm').reset();
});

document.getElementById('limpiarBtn').addEventListener('click', function() {
    document.getElementById('registroForm').reset();
    document.getElementById('salida').innerHTML = '';
});