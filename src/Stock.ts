interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  categoria: "alimentos" | "tecnología" | "papelería";
}

function productosBajoStock(productos: Producto[]): Producto[] {
  return productos.filter(producto => {
    if (producto.categoria === "alimentos" && producto.cantidad < 20) return true;
    if (producto.categoria === "tecnología" && producto.cantidad < 5) return true;
    if (producto.categoria === "papelería" && producto.cantidad < 50) return true;
    return false;
  });
}

const listaProductos: Producto[] = [
  { id: 1, nombre: "Leche", cantidad: 10, categoria: "alimentos" },
  { id: 2, nombre: "Celular", cantidad: 2, categoria: "tecnología" },
  { id: 3, nombre: "Hojas", cantidad: 80, categoria: "papelería" },
];

console.log(productosBajoStock);
console.log(listaProductos);
  