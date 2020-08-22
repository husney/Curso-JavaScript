
/* let persona ={
    nombre: "Husney",
    apellidos:  "Bayona Rincón",
    profesion: "Desarrollador Web y Software",
    email: "email@email.com",
    edad: 20,
    musica: ["Ingles", "PoP", "Push"],
    residencia: {
        pais: "Colombia",
        departamento: "Santander"
    },
    fechaNacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
}


    console.log(persona.fechaNacimiento());

    persona.musica.push("Electronica");

    console.log(persona.musica);

    console.log(persona.residencia.pais);

console.log(persona.nombre + " " + persona.apellidos + " " +persona.profesion); */


const autos = [
    {modelo: "Mustang", motor: 6.0},
    {modelo: "Ferrai", motor: 6.1},
    {modelo: "Audi", motor: 5.1},
    {modelo: "BMW", motor: 8.7}
]



for(let i = 0; i < autos.length;i++){
    let motor = parseFloat(autos[i].motor);
    console.log(autos[i].modelo + " " + motor);
}


