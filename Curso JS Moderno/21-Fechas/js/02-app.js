const hoy = new Date();

moment.locale('es');
console.log(moment().format('MMMM Do YYYY h:mm:ss'));

console.log("----");
console.log(moment().format('LLLL', hoy));