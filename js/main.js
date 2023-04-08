const carrito = []

const destinos = [{ codigo: 1, nombre: "Cancún", fechaSalida: "20 de mayo 2023", duracion: "15 días", precio: "4000" },
                  { codigo: 2, nombre: "Punta Cana", fechaSalida: "10 de junio 2023", duracion: "15 días", precio: "5000"},
                  { codigo: 3, nombre: "Buzios", fechaSalida: "23 de junio 2023", duracion: "15 días", precio: "2000"},
                  { codigo: 4, nombre: "Europa", fechaSalida: "23 de junio 2023", duracion: "15 días", precio: "6000"},
                  { codigo: 5, nombre: "Disney", fechaSalida: "20 de julio", duracion: "10 días", precio: "5000"},
                  { codigo: 6, nombre: "Turquía", fechaSalida: "20 de agosto", duracion: "10 días", precio: "5000"}];

function login() {
    let nombreIngresado = prompt("Ingresa tu nombre");
    if (nombreIngresado.trim()) {
        usuario = nombreIngresado.trim()
        alert("Hola " + nombreIngresado + "! ")
    } else {
        alert("El dato ingresado es inválido.")
    }
}

function buscarDestino(codigo) {
    let resultado = destinos.find((destino) => destino.codigo === parseInt(codigo))
    return resultado
}

function cantidadPasajeros() {
    destinoCantidadPasajeros = prompt("Especifica la cantidad de pasajeros.")
    return
}

function finalizarCompra() {
    if (carrito.length === 0) {
        console.warn("No agregaste nada en el carrito.")
        return
    }

    const shopping = new Compra(carrito)
    alert("El precio de tu viaje es de: Usd " + shopping.precioTotal())
    
    let respuesta = confirm("¿Deseas realizar la compra?")
    if (respuesta === true) {
        alert("Debes abonar usd " + shopping.precioTotal())
        carrito.length = 0
    }
}

const mensajeInicial = "Elige el código de tu destino. \n" + 
"1. Cancún \n" +
"2. Punta Cana \n" +
"3. Buzios \n" +
"4. Europa \n" +
"5. Disney \n" +
"6. Turquía \n"

function realizarCompra() {
    let codigo = prompt(mensajeInicial)
    if (!parseInt(codigo)) {
        alert("Ingresa un código válido.")
        let respuesta = confirm("¿Quieres elegir un destino?")
        if (respuesta === true) {
           realizarCompra()
        }
        return
    }

    let destinoElegido = buscarDestino(codigo)
    console.log(destinoElegido)
    alert(destinoElegido.nombre + " ha sido agregado al carrito.")
    carrito.push(destinoElegido)

    let respuesta = confirm("¿Quieres agregar otro destino?")
    if (respuesta === true) {
        realizarCompra()
    } else {
        cantidadPasajeros()
        finalizarCompra()
    }
}

login()
realizarCompra()