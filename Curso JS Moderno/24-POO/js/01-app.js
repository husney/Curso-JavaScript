// Class Declaration
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cli1 = new Cliente("Cliente 1" , 20000);
console.log(cli1);

// Class Expresion
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cli2 = new Cliente2("Cliente 2", 10000);
console.log(cli2);