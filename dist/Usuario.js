"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resumenCambios(cambios) {
    let resumen = { nombre: 0, correo: 0, contraseña: 0 };
    for (const c of cambios) {
        if (c.tipo === "nombre")
            resumen.nombre++;
        else if (c.tipo === "correo")
            resumen.correo++;
        else if (c.tipo === "contraseña")
            resumen.contraseña++;
    }
    return resumen;
}
const historial = [
    { tipo: "nombre", nuevoValor: "Sara" },
    { tipo: "correo", nuevoValor: "sara@gmail.com" },
    { tipo: "contraseña", nuevoValor: "1234" },
    { tipo: "nombre", nuevoValor: "Sara B." },
    { tipo: "correo", nuevoValor: "sara.barrera@gmail.com" }
];
console.log(resumenCambios(historial));
//# sourceMappingURL=Usuario.js.map