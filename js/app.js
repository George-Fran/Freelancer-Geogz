let modo = document.getElementById('mode');
let a = document.getElementsByClassName('sombra')[0];
let contador = 0;
modo.addEventListener('click', () => {
    contador++;
    if (contador % 2 === 0) {
        document.body.style.backgroundImage = 'linear-gradient(to top, var(--gris) 0%, var(--claro) 100%)';
        document.body.style.color = 'var(--oscuro)';
        a.style.backgroundColor = 'var(--blanco)';
        modo.innerHTML = '<ion-icon name="aperture-outline"></ion-icon>';
        console.log("blanco");
    } else {
        document.body.style.backgroundImage = 'linear-gradient(to top, var(--grisClaro) 0%, var(--oscuro) 100%)';
        document.body.style.color = 'var(--blanco)';
        a.style.backgroundColor = 'var(--oscuro)';
        document.getElementsByClassName('footer')[0].style.color = 'var(--oscuro)';
        modo.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
        console.log("oscuro");
    }
});