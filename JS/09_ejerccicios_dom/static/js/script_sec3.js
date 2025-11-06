let tareas = [];

function validarFormulario() {
    const descripcion = document.getElementById('descripcion').value.trim();
    const fecha = document.getElementById('fecha').value;
    const prioridad = document.getElementById('prioridad').value;

    let errores = [];

    if (!descripcion || descripcion.length < 3) {
        errores.push('La descripción debe tener al menos 3 caracteres');
    }

    if (!fecha) {
        errores.push('Debe seleccionar una fecha');
    }

    if (!prioridad) {
        errores.push('Debe seleccionar una prioridad');
    }

    return errores;
}

function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);
    return fecha.toLocaleDateString('es-ES');
}

function renderizarTareas() {
    const lista = document.getElementById('tareasLista');
    const filtroAlta = document.getElementById('filtroAlta').checked;

    let tareasMostrar = filtroAlta ? 
        tareas.filter(tarea => tarea.prioridad === 'Alta') : 
        tareas;

    if (tareasMostrar.length === 0) {
        lista.innerHTML = '<div class="empty-message">No hay tareas para mostrar</div>';
        return;
    }

    lista.innerHTML = '';

    for (let i = 0; i < tareasMostrar.length; i++) {
        const tarea = tareasMostrar[i];
        const div = document.createElement('div');
        div.className = `tarea-item ${tarea.completada ? 'completada' : ''}`;
        
        div.innerHTML = `
            <div class="tarea-descripcion ${tarea.completada ? 'completada' : ''}">${tarea.descripcion}</div>
            <div class="tarea-info">
                Fecha: ${formatearFecha(tarea.fecha)} | 
                Prioridad: <span class="prioridad-${tarea.prioridad.toLowerCase()}">${tarea.prioridad}</span>
            </div>
            <input type="checkbox" class="tarea-checkbox" ${tarea.completada ? 'checked' : ''} 
                   onchange="toggleCompletada(${tareas.indexOf(tarea)})">
        `;
        
        lista.appendChild(div);
    }
}

function toggleCompletada(indice) {
    tareas[indice].completada = !tareas[indice].completada;
    renderizarTareas();
}

function ordenarPorFecha() {
    tareas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    renderizarTareas();
}

function ordenarPorPrioridad() {
    const orden = { 'Alta': 3, 'Media': 2, 'Baja': 1 };
    tareas.sort((a, b) => orden[b.prioridad] - orden[a.prioridad]);
    renderizarTareas();
}

function mostrarError(errores) {
    document.getElementById('error').innerHTML = `<div class="error">Errores:<br>• ${errores.join('<br>• ')}</div>`;
}

function limpiarError() {
    document.getElementById('error').innerHTML = '';
}

document.getElementById('tareaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const errores = validarFormulario();
    
    if (errores.length > 0) {
        mostrarError(errores);
        return;
    }

    const nuevaTarea = {
        descripcion: document.getElementById('descripcion').value.trim(),
        fecha: document.getElementById('fecha').value,
        prioridad: document.getElementById('prioridad').value,
        completada: false
    };

    tareas.push(nuevaTarea);
    this.reset();
    renderizarTareas();
    limpiarError();
});

document.getElementById('filtroAlta').addEventListener('change', renderizarTareas);
document.getElementById('ordenarFecha').addEventListener('click', ordenarPorFecha);
document.getElementById('ordenarPrioridad').addEventListener('click', ordenarPorPrioridad);

document.getElementById('limpiarBtn').addEventListener('click', function() {
    tareas = [];
    document.getElementById('tareaForm').reset();
    renderizarTareas();
    limpiarError();
});

// Fecha mínima = hoy
document.getElementById('fecha').min = new Date().toISOString().split('T')[0];

// Mostrar inicial
renderizarTareas();