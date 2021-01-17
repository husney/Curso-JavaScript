const autenticado = true;
const permitido = false;

console.log( autenticado ? 'Si esta autenticado': 'No esta autenticado');

console.log((autenticado && permitido) ? 'Puede ingresar' : 'No puede ingresar');

console.log("----");

console.log(autenticado ? permitido ? 'Autenticado y Permitido': 'Autenticado pero No permitido' : 'No autenticado');
