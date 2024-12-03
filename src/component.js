class Componente {

    constructor(fabricante, modelo, precio) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.precio = precio;
    }

    obtenerPrecio() {
        return this.precio;
    }

    mostrarDetalles(indent = 0) {
        return `${' '.repeat(indent)}${this.constructor.name}: ${this.fabricante} - ${this.modelo} - $${this.precio}`;
    }
}

class DispositivoEntrada extends Componente {
    constructor(fabricante, modelo, precio, conector, puertosValidos) {
        super(fabricante, modelo, precio);
        this.conector = conector;
        this.puertosValidos = puertosValidos;
    }

    mostrarDetalles(indent = 0) {
        return `${super.mostrarDetalles(indent)} (Conector: ${this.conector}, Puertos válidos: ${this.puertosValidos.join(', ')})`;
    }
}

class DispositivoSalida extends Componente {
    constructor(fabricante, modelo, precio, puertosValidos) {
        super(fabricante, modelo, precio);
        this.puertosValidos = puertosValidos;
    }

    mostrarDetalles(indent = 0) {
        return `${super.mostrarDetalles(indent)} (Puertos válidos: ${this.puertosValidos.join(', ')})`;
    }
}

class Impresora extends DispositivoSalida {
    constructor(fabricante, modelo, precio, puertosValidos, tipoCartucho, paginasImpresas) {
        super(fabricante, modelo, precio, puertosValidos);
        this.tipoCartucho = tipoCartucho;
        this.paginasImpresas = paginasImpresas;
    }

    mostrarDetalles(indent = 0) {
        return `${super.mostrarDetalles(indent)} (Cartucho: ${this.tipoCartucho}, Páginas impresas: ${this.paginasImpresas})`;
    }
}

class PantallaTactil extends Componente {
    constructor(fabricante, modelo, precio, puertosValidos) {
        super(fabricante, modelo, precio);
        this.puertosValidos = puertosValidos;
    }

    mostrarDetalles(indent = 0) {
        return `${super.mostrarDetalles(indent)} (Puertos válidos: ${this.puertosValidos.join(', ')})`;
    }
}

class Ordenador extends Componente {
    constructor(fabricante, modelo) {
        super(fabricante, modelo, 0);
        this.componentes = [];
    }

    agregarComponente(componente) {
        this.componentes.push(componente);
        this.precio += componente.obtenerPrecio();
    }

    quitarComponente(componente) {
        const index = this.componentes.indexOf(componente);
        if (index !== -1) {
            this.componentes.splice(index, 1);
            this.precio -= componente.obtenerPrecio();
        }
    }

    mostrarDetalles(indent = 0) {
        let detalles = `${super.mostrarDetalles(indent)}\n`;
        this.componentes.forEach((comp) => {
            detalles += comp.mostrarDetalles(indent + 2) + '\n';
        });
        return detalles;
    }
}

module.exports = { 
    Ordenador, 
    DispositivoEntrada, 
    DispositivoSalida, 
    Impresora, 
    PantallaTactil 
};