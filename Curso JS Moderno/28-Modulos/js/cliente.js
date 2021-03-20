export const nombre = 'Prueba';
export const ahorro = 200;

export function sayHello(){
    console.log("Hola");
}

export function tieneSaldo(saldo){
    if (saldo > 0){
        console.log("Tiene saldo");
    }else{
        console.log("No tiene saldo");
    }
}


export class Cliente{
    
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion () {
        console.log(this.nombre, this.ahorro);
    }
}