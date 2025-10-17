type Transaccion = {
  monto: number;
  tipo: "ingreso" | "egreso";
  categoria: string;
};

function Transacciones(transacciones: Transaccion[]) {
  let ingreso = 0;
  let egreso = 0;

  for (let t of transacciones) {
    if (t.tipo === "ingreso") {
      ingreso += t.monto;
    } else {
      egreso += t.monto;
    }
  }

  return { ingreso, egreso };
}

const lista: Transaccion[] = [
  { monto: 200000, tipo: "ingreso", categoria: "sueldo" },
  { monto: 150000, tipo: "ingreso", categoria: "venta" },
  { monto: 80000, tipo: "egreso", categoria: "comida" },
  { monto: 100000, tipo: "egreso", categoria: "servicios" },
];

console.log(Transacciones(lista));
