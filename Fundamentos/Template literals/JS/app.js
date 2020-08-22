
let prdotucto1 = "Hamburgueza", precioPt1 = 10.000;
let producto2 = "Pizza", precioPt2 = 5.000;


let html;
html =  `
        <ul>
            <li>ORDEN: ${prdotucto1} </li>
            <li>PRECIO: ${precioPt1.toFixed(3)} </li>
            <li>ORDEN: ${producto2} </li>
            <li>PRECIO: ${precioPt2.toFixed(3)} </li>
            <li><b>Total: </b> ${total(precioPt1, precioPt2)} </li>
        <ul>
        `;

function total(precio1, precio2){
    return (precio1 + precio2).toFixed(3);
}

document.getElementById("app").innerHTML = html;





/* html = "<ul>" +
        "<li>ORDEN: " + prdotucto1 + "</li>"+ 
        "<li>PRECIO: " + precioPt1.toFixed(3) + "</li>"+
        "<li>ORDEN: " + producto2 + "</li>" +
        "<li>PRECIO: " + precioPt2.toFixed(3) + "</li>"+
        "<li><b>Total: <b> "+ (precioPt1 + precioPt2).toFixed(3) + "</li>"+
       "</ul>";
 */
