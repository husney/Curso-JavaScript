//alert('Hola Mundo')
//document.write('Hola desde un archivo JS')

//const nombre = prompt('¿Cual es tu nombre?');
//document.getElementById('texto').innerHTML = 'Hola ' + nombre
//document.querySelector('#texto').innerHTML = 'Hola ' + nombre;

let persona = {
    nombre : 'Laura',
    apellido : 'Sanchez'
}

delete persona.nombre;

console.log(persona.nombre, persona.apellido)


function sumar (n1,n2){
    return n1 + n2;
}

let suma = sumar

console.log(suma(5,5))
