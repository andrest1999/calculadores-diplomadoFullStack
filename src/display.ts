class Display {
    displayValorAnterior: HTMLElement;
    displayValorActual: HTMLElement;
    calculadora: Calculadora;
    tipoOperacion: string | undefined;
    valorActual: string;
    valorAnterior: string;
    signos: Record<string, string>;

    constructor(displayValorAnterior: HTMLElement, displayValorActual: HTMLElement) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: '*',
            dividir: '/'
        };
    }

    borrar(): void {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo(): void {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(num: string): void {
        if (num === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + num;
        this.imprimirValores();
    }

    imprimirValores(): void {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    computar(tipo: string): void {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    calcular(): void {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual).toString();
    }
}
