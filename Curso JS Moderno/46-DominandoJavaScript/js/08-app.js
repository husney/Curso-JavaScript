self.onload = ()=>{
    console.log("Ventana lista");
}

window.nombre = "Monitor";

const producto = {
    precio: 800,
    disponible: true,
    mostrarInfo: function(){
        return `El producto: ${self.nombre}`;
    }
}

console.log(producto.mostrarInfo());