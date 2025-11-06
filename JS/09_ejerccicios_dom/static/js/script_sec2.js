let notas = [];

function validarNota(nota) {
    return !isNaN(nota) && nota >= 1.0 && nota <= 7.0;
}

function mostrarNotas() {
    const container = document.getElementById('notasContainer');
    const display = document.getElementById('notasDisplay');

    if (notas.length === 0) {
        container.style.display = 'none';
        return;
    }

    container.style.display = 'block';
    
    display.innerHTML = '';
    for (let i = 0; i < notas.length; i++) {
        const span = document.createElement('span');
        span.className = 'nota-item';
        span.textContent = notas[i].toFixed(1);
        display.appendChild(span);
    }

    document.getElementById('totalNotas').textContent = notas.length;
    document.getElementById('notaMayor').textContent = Math.max(...notas).toFixed(1);
    document.getElementById('notaMenor').textContent = Math.min(...notas).toFixed(1);
}

function calcularPromedio() {
    if (notas.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    
    return suma / notas.length;
}

function mostrarResultado(promedio) {
    const resultado = document.getElementById('resultado');
    const aprobado = promedio >= 4.0;
    const estado = aprobado ? 'Aprobado' : 'Reprobado';
    
    const notasTexto = notas.join(', ');

    resultado.innerHTML = `
        <div class="resultado ${aprobado ? '' : 'reprobado'}">
            <strong>Resultado:</strong><br>
            Total de notas: ${notas.length}<br>
            Notas: ${notasTexto}<br>
            Promedio: ${promedio.toFixed(2)}<br>
            Estado: <strong>${estado}</strong>
        </div>
    `;
}

function mostrarError(mensaje) {
    document.getElementById('resultado').innerHTML = `<div class="error">${mensaje}</div>`;
}

document.getElementById('agregarBtn').addEventListener('click', function() {
    const input = document.getElementById('nota');
    const valor = parseFloat(input.value);

    if (!validarNota(valor)) {
        mostrarError('Ingrese una nota válida entre 1.0 y 7.0');
        return;
    }

    notas.push(valor);
    input.value = '';
    mostrarNotas();
    document.getElementById('resultado').innerHTML = '';
});

document.getElementById('calcularBtn').addEventListener('click', function() {
    if (notas.length === 0) {
        mostrarError('Debe ingresar al menos una nota');
        return;
    }

    const promedio = calcularPromedio();
    mostrarResultado(promedio);
});

document.getElementById('eliminarBtn').addEventListener('click', function() {
    if (notas.length === 0) {
        mostrarError('No hay notas para eliminar');
        return;
    }

    notas.pop();
    mostrarNotas();
    document.getElementById('resultado').innerHTML = '';
});

document.getElementById('limpiarBtn').addEventListener('click', function() {
    notas = [];
    document.getElementById('nota').value = '';
    mostrarNotas();
    document.getElementById('resultado').innerHTML = '';
});

document.getElementById('nota').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('agregarBtn').click();
    }
});