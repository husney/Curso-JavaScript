const RestaurantApp = {};

RestaurantApp.platillos = [
    {
        platillo: "Pizza",
        precio: 5000
    },
    {
        platillo: "Papas",
        precio: 5000
    }    
];

RestaurantApp.funciones = {
    sayHello(){
        console.log("Hola");
    },
    mostrarMenu: () => {
        RestaurantApp.platillos.forEach((plato, i) =>{
            const { platillo, precio } = plato;
            console.log(`${i + 1 }: ${platillo} Precio: ${precio}`);
        })
    },
    ordenar: id =>{
        console.log(`Ordenaste ${RestaurantApp.platillos[id -1].platillo}`);
    },
    agregarPlatillo(platillo, precio){
        RestaurantApp.platillos.push({ platillo : platillo, precio: precio});
        this.mostrarMenu();
    }
}

RestaurantApp.funciones.sayHello();
RestaurantApp.funciones.mostrarMenu();
RestaurantApp.funciones.ordenar(1);
RestaurantApp.funciones.agregarPlatillo("Panserotti", 7000);