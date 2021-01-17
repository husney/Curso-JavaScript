
const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log("Puede comprar");
}else if(!usuario && !puedePagar){
    console.log("No puedes comprar");
}else if(!usuario){
    console.log("Para comprar necesitas loguearte");
}else if(!puedePagar){
    console.log("No puedes pagar");
}