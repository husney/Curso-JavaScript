//Cosntructor Pattern

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email, empresa){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const per1 = new Persona('Persona', 'Persona@gmail.com');
console.log(per1);


const cli1 = new Cliente('Prueba', 'Prueba@gmail.com', 'JS');
console.log(cli1);
