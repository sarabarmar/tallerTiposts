"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validarPago(pago) {
    if (pago.metodo === "tarjeta")
        return !!pago.numeroTarjeta && !!pago.cvv;
    if (pago.metodo === "transferencia")
        return !!pago.banco && !!pago.numeroCuenta;
    if (pago.metodo === "efectivo")
        return true;
    return false;
}
const pago1 = { metodo: "tarjeta", numeroTarjeta: "1234567890123456", cvv: "123" };
const pago2 = { metodo: "transferencia", banco: "Bancolombia", numeroCuenta: "1234567890" };
const pago3 = { metodo: "efectivo" };
const pago4 = { metodo: "tarjeta", numeroTarjeta: "", cvv: "" };
console.log(validarPago(pago1));
console.log(validarPago(pago2));
console.log(validarPago(pago3));
console.log(validarPago(pago4));
//# sourceMappingURL=Pagos.js.map