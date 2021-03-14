const map = new Map();

map.set('nombre', 'Cliente');
map.set('prueba', 'probando'); 
console.log(map); 
map.forEach(dato => console.log(dato));

console.log(map.get('nombre'));

console.log(map.has('prueba'));
console.log(map.size);

map.delete('prueba');
console.log(map.has('prueba'));

map.forEach(dato => console.log(dato));