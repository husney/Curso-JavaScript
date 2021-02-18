localStorage.setItem("nombre", "prueba");
console.log(localStorage.getItem("nombre"));

const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem("meses", JSON.stringify(meses));
console.log(JSON.parse);

const producto = {
    nombre: "Producto",
    producto: 123
}

localStorage.setItem("producto", JSON.stringify(producto));

console.log(JSON.parse(localStorage.getItem("producto"))); 

console.log(localStorage.getItem("producto"));
localStorage.removeItem("producto");
console.log(localStorage.getItem("producto"));