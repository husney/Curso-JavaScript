function sumar(n1, n2){
    return n1 + n2;
}

console.log(sumar(5, 5));

let total = 0;
function agregarValor(valor){
    total += valor;
}

function calcularImpuesto(valor){
    return valor * 1.16;
}

agregarValor(200);
agregarValor(500);
agregarValor(700);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);