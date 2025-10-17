type Pago =
  | {
      metodo: "tarjeta";
      numeroTarjeta: string;
      cvv: string;
    }
  | {
      metodo: "transferencia";
      banco: string;
      numeroCuenta: string;
    }
  | {
      metodo: "efectivo";
    };

function validarPago(pago: Pago): boolean {
  if (pago.metodo === "tarjeta") return !!pago.numeroTarjeta && !!pago.cvv;
  if (pago.metodo === "transferencia") return !!pago.banco && !!pago.numeroCuenta;
  if (pago.metodo === "efectivo") return true;
  return false;
}

const pago1: Pago = { metodo: "tarjeta", numeroTarjeta: "1234567890123456", cvv: "123" };
const pago2: Pago = { metodo: "transferencia", banco: "Bancolombia", numeroCuenta: "1234567890" };
const pago3: Pago = { metodo: "efectivo" };
const pago4: Pago = { metodo: "tarjeta", numeroTarjeta: "", cvv: "" };

console.log(validarPago(pago1));
console.log(validarPago(pago2));
console.log(validarPago(pago3));
console.log(validarPago(pago4));
