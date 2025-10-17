"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validarCampos(campos) {
    const invalidos = [];
    for (const campo of campos) {
        if (campo.tipo === "texto" && (typeof campo.valor !== "string" || campo.valor.trim() === "")) {
            invalidos.push(campo.nombre);
        }
        else if (campo.tipo === "numero" && (typeof campo.valor !== "number" || isNaN(campo.valor))) {
            invalidos.push(campo.nombre);
        }
        else if (campo.tipo === "email" &&
            (typeof campo.valor !== "string" || !campo.valor.includes("@"))) {
            invalidos.push(campo.nombre);
        }
    }
    return invalidos;
}
const campos = [
    { nombre: "nombre", tipo: "texto", valor: "Sara" },
    { nombre: "edad", tipo: "numero", valor: 17 },
    { nombre: "correo", tipo: "email", valor: "barrerasara2008@gmail.com" },
];
console.log(validarCampos(campos));
//# sourceMappingURL=Formularios.js.map