function verificarEdad() {
    const edad = parseInt(prompt("Ingresa tu edad:"));
    if (edad >= 18) {
        alert("Podes realizar la compra.")
        return true;
    } else {
        alert("Tenes que tener al menos 18 años para realizar la compra.");
        return false;
    }
}

function verificarSaldo() {
    const saldoActual = parseFloat(prompt("Ingresa tu saldo actual de tu cuenta:"));
    const precioProducto = parseFloat(prompt("Ingresa el precio del producto que queres comprar:"));
    if (saldoActual >= precioProducto) {
        alert("¡La compra fue realizada con exito!");
        return saldoActual - precioProducto;
    } else {
        alert("Saldo insuficiente para realizar la compra.");
        return saldoActual;
    }
}

function mostrarSaldoRestante() {
    if (verificarEdad()) {
        const nuevoSaldo = verificarSaldo();
        alert("Tu saldo actual es de: $" + nuevoSaldo.toFixed(2));
    }
}

mostrarSaldoRestante();
