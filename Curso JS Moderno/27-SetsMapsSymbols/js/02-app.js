const weakset = new WeakSet();

const cliente1 = {
    nombre: "cliente1",
    saldo: 50000
}

weakset.add(cliente1);
console.log(weakset);