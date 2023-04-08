class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras
    }

    precioTotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, destino)=> acc + (destino.precio * destinoCantidadPasajeros * IVA), 0)
        }
    }
}