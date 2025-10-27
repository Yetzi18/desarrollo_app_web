function login(boton) {
    if (boton.textContent == 'Login') {
        boton.textContent = 'Logout';
    } else {
        boton.textContent = 'Login';
    }
}

function like(boton) {
    const spanDeLikes = boton.querySelector('.like-btn');
    let currentLikes = parseInt(spanDeLikes.textContent);
    spanDeLikes.textContent = currentLikes + 1;
}

function btnBorrar(btn) {
    btn.remove()
}