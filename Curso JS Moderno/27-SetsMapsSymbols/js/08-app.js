const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];

const ordenes = new Set([123,1234,1234,1,2]);

const datos = new Map();

datos.set('nombre', 'husney');
datos.set('profesion', 'desarrollador');

console.log('entries()');

for (let entrie of ciudades.entries()){
    console.log(entrie);
}

console.log('------');

for (let entrie of ordenes.entries()){
    console.log(entrie);
}


console.log('-----');
console.log('values()');


for(let value of ciudades.values()){
    console.log(value); 
}

console.log('-----');
console.log('keys()');

for(let key of ciudades.keys()){
    console.log(key); 
}