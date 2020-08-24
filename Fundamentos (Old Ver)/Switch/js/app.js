//Switch
/*
    switch(valor){
        case "Hola":
            Haga...
        break;

        case 5:
            Haga...
        break;

        case true:
            Haga...
        break;

        default: (En caso de que no se cumpla ninguna)
        
        break; (El break no es necesario en el default)
        
    }
*/

let fecha = new Date();

switch(fecha.getDay()){
    case 0: 
        console.log("Sunday");
    break;
    
    case 1:
        console.log("Monday");
    break;

    case 2:
        console.log("Tuesday");
    break;

    case 3:
        console.log("Wednesday");
    break;

    case 4:
        console.log("Thrusday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

}

let mes;

switch(new Date().getMonth()){
    case 0:
        mes = "January";
        break;    
    case 1: 
        mes = "February";
        break;    
    case 2: 
        mes = "March";
        break;    
    case 3:
        mes = "April";
        break;
    case 4:
        mes = "May";
        break;
    case 5:
        mes = "June";
        break;
    case 6:
        mes = "July";
        break;
    case 7:
        mes = "August";
        break;
    case 8:
        mes = "September";
        break;
    case 9:
        mes = "October";
        break;
    case 10:
        mes = "November";
        break;
    case 11:
        mes = "December";
        break;   
}

console.log(mes);

