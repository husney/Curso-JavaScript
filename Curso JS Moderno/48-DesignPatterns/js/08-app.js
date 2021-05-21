function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta:(articulo, precio) =>{
        console.log(`Articulo: ${articulo} Precio: ${precio}`);
    },
    vendido: comprador=>{
        console.log(`Vendido a: ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta:(cantidad, comprador) =>{
        console.log(`${comprador.nombre}: ${cantidad}`);
    }
}

function Subasta(){
    let comporadores = {};

    return{
        registrar: usuario =>{
            comporadores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Maseratti', 300000000);

juan.oferta(250000000, juan);

pablo.oferta(30000000, pablo);

vendedor.vendido('Pablo');