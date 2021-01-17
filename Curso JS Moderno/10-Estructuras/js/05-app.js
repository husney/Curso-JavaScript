const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log("El medio de pago es efectivo");
        break;
    case 'tarjeta':
        console.log("El medio de pago es tarjeta");
        break;
    case 'cheque':
        console.log("El medio de pago es cheque");
        break;
    case 'credito':
        console.log("El medio de pago es a credito");
        break;
    default:
        console.log("El medio de pago no es soportado");
        break;
}; 

