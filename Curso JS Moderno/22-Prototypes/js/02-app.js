function CLiente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
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

const juan = new CLiente("juan", 10000);
console.log(juan.datosCliente());
console.log(juan.saldo);
 