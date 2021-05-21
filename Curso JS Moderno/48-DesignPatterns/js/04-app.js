// Factory Pattern - Crea objetos basados en condiciones

class InputHtml {
    constructor(type, nombre){
        this.type = type;
        this.nombre = nombre;
    }

    crearInput(){
        return `<input type="${this.type}" id="${this.nombre}" name="${this.nombre}">`;
    }
}

class HTMLFactory{
    crearElemento(element, tipo, nombre){

        //let elemento = null;
        // switch(tipo){
        //     case "text":
        //         elemento = new InputHtml("text", nombre);
        //     break;

        //     case "tel":
        //         elemento = new InputHtml("tel", nombre);
        //     break;

        //     case "email":
        //         elemento = new InputHtml("email", nombre);
        //     break;

        //     default:
        //         return;
        // }

        //return elemento.crearInput();

        switch(element){
            case "input":
                return new InputHtml(tipo, nombre).crearInput();
            break;

            default:
                break;
        }
        
    }
}

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento("input","text", "txtPrueba");
console.log(inputText);

const elemento2 = new HTMLFactory();
const telefono = elemento2.crearElemento("input","tel", "telPrueba");
console.log(telefono);

const elemento3 = new HTMLFactory();
const email = elemento3.crearElemento("input", "email", "emailPrueba");
console.log(email);