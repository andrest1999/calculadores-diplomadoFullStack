const displayValorAnterior = document.getElementById('valor-anterior') as HTMLElement;
const displayValorActual = document.getElementById('valor-actual') as HTMLElement;
const botonesNumeros = document.querySelectorAll('.num') as NodeListOf<HTMLButtonElement>;
const botonesOperadores = document.querySelectorAll('.operador') as NodeListOf<HTMLButtonElement>;

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value));
});
