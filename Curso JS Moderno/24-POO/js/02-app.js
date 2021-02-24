class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarDatos(){
        console.log(`Nombre = ${this.nombre} Saldo = ${this.saldo}`);
    }

    static bienvenido(){
        console.log("Te saludo desde el objeto cliente 1");
    }
}

const cli1 = new Cliente("Cliente 1", 2000);

const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarDatos(){
        return `Nombre = ${this.nombre} Saldo = ${this.saldo}`;
    }
}

const cli2 = new Cliente2("Cliente 2", 30000);
console.log(cli2.mostrarDatos());

Cliente.bienvenido();

