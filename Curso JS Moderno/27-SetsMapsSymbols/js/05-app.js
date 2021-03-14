const sym = Symbol('1');
const sym2 = Symbol('1');

const nombre = Symbol('Sara');
const apellido = Symbol('Orrego');

const persona = { }

persona[nombre] = nombre;
persona[apellido] = apellido;
persona.tipoCliente = 'premium';
persona.saldo = 1000;

console.log(persona);

console.log(persona[nombre]);
