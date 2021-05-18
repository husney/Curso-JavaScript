function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('camaro', 'negro');
console.log(auto);

window.color = "Negro";

function mostrarColor(){
    console.log(color);
}

mostrarColor();