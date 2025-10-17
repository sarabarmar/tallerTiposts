"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function productosBajoStock(productos) {
    return productos.filter(producto => {
        if (producto.categoria === "alimentos" && producto.cantidad < 20)
            return true;
        if (producto.categoria === "tecnología" && producto.cantidad < 5)
            return true;
        if (producto.categoria === "papelería" && producto.cantidad < 50)
            return true;
        return false;
    });
}
const listaProductos = [
    { id: 1, nombre: "Leche", cantidad: 10, categoria: "alimentos" },
    { id: 2, nombre: "Celular", cantidad: 2, categoria: "tecnología" },
    { id: 3, nombre: "Hojas", cantidad: 80, categoria: "papelería" },
];
console.log(productosBajoStock);
console.log(listaProductos);
//# sourceMappingURL=Stock.js.map