
const fnNombre = info => ({

    mostrarNombre(){
        console.log(info.nombre);
    }
});

const fnSetEmail = info => ({
    
    agregarEmail(email){
        info.email = email;
    }
});

const fnGetEmail = info => ({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});

const fnSetEmpresa = info => ({
    agregarEmpresa(empresa){
        info.empresa = empresa;
    }
});

const fnGetEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Emprsa: ${info.empresa}`);
    }
});

const fnSetPuesto = info =>({
    
    agregarPuesto(puesto){
        info.puesto = puesto;
    }
});

const fnGetPuesto = info => ({

    obtenerPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        fnNombre(info),
        fnSetEmail(info),
        fnGetEmail(info),
        fnSetEmpresa(info),
        fnGetEmpresa(info)
    );
}



function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        fnNombre(info),
        fnSetEmail(info),
        fnGetEmail(info),
        fnSetPuesto(info),
        fnGetPuesto(info)
    );
}

const cli1 = Cliente('cli1', null, 'js');
cli1.mostrarNombre();
cli1.agregarEmail('cli1Nuevo@gmail.com');
cli1.mostrarEmail();
cli1.mostrarEmpresa();

const emp1 = Empleado('emp1', null , 'programador');
emp1.mostrarNombre();
emp1.agregarEmail('emp1Nuevo@gmail.com');
emp1.mostrarEmail();
emp1.obtenerPuesto();
