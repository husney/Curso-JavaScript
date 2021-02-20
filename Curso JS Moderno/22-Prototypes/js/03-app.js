function CLiente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;  
}

CLiente.prototype.saludar = function(){
    alert("Hola");
}

CLiente.prototype.tipoCliente = function (){
    let tipo;

    if(this.saldo >= 10000){
        tipo = "Platinum";
    }else if(this.saldo > 5000){
        tipo = "Gold";
    }else{
        tipo = "Normal";
    }
    return tipo;
}

CLiente.prototype.datosCliente = function(){
    return `Nombre = ${this.nombre} Saldo = ${this.saldo} Tipo de cliente = ${this.tipoCliente()}`;
}
 
function Persona(nombre, saldo, telefono){    
    CLiente.call(this, nombre, saldo); //Uso del constructor de cliente "Herencia"
    this.telefono = telefono;
}
Persona.prototype = Object.create( CLiente.prototype );


 
//Instancia
const juan = new Persona("Juan", 5000, 12345);
const per = new CLiente("cliente", 5000);
console.log(juan.tipoCliente());
juan.saludar();


