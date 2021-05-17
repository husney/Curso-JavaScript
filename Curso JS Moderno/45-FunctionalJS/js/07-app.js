const obtenerCliente = ()=> () => console.log("Tu nombre");

const fn = obtenerCliente();

fn();

const obtenerApellido = () =>{
    return () =>{
        console.log("Tu apellido");
    }
}

const nf2 = obtenerApellido();

nf2();