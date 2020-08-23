
let horas = 10;

if(horas >0 && horas <24){
    if(horas >0 && horas <12){
        console.log("Buenos Días");
    }else if(horas >= 12 && horas <18){
        console.log("Buenas Tardes");
    }else{
        console.log("Buenas Noches");
    }
}else{
    console.log("Hora no valida");
}

function necesario(ef, total){
    necesario = 0;

    for(let i = ef; i <= total; i++){
        if(i == total){
            return necesario;
        }else{
            necesario++;
        }
    }
}

let efectivo = 300,
    credito = 300,
    totalCarrito = 500;

if(totalCarrito <= efectivo){
    console.log("Puede pagar");
}else if(totalCarrito < (efectivo + credito)){
    console.log("Puede pagar con credito");
    console.log("Efectivo actual: " + efectivo);
    console.log("Credito :" + credito);
    console.log("Valor carrito: "+ totalCarrito);
    console.log("Credito necesario : " + (totalCarrito - efectivo));
    
    
}else{
    console.log("No puede pagar");
}

//(si es verdadero) ? entonces hace : si no es verdadero entonces ;

//Operador Ternario

let logueado = true;
logueado = (logueado == true) ? "Conectado" : "Desconectado" ;


console.log(logueado);




/*

if(Condicion){
    Haga...
}else if(Condición){
    Haga...
}else{
    Haga...
}

*/
