// (function (){
//     console.log('IIFE');
// })();

import { nombre, ahorro, sayHello, tieneSaldo, Cliente} from './cliente.js'
import {Empresa} from './empresa.js';

console.log(nombre, ahorro);
sayHello();

tieneSaldo(ahorro);

const cli = new Cliente("Exportado", 20000);
console.log(cli);

cli.mostrarInformacion();

class cliente2 extends Cliente{

    constructor(nombre, ahorro, edad){
        super(nombre, ahorro);
        this.edad = edad;
    }

    mostrarInformacion(){
        console.log(this.nombre, this.ahorro, this.edad);
    }
}

const cli2 = new cliente2("Extendido", 50000, 20);
console.log(cli2);

cli2.mostrarInformacion();


const emp1 = new Empresa("Empresa", 20000000, "TIC");
console.log(emp1);