function iterador(arreglo){
    let i = 0;

    return {
        siguiente: () =>{
            const final = (i >= arreglo.length);
            const valor = !final ? arreglo[i++] : undefined ;

            return final, valor;
        }
    }
}