

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