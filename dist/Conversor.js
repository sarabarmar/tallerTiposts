"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function convertirUnidad(valor, desde, hacia) {
    if (valor < 0)
        return "El valor no puede ser negativo";
    const factores = {
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
    };
    if (!(desde in factores) || !(hacia in factores))
        return "Unidad no válida";
    const valorEnMetros = valor * factores[desde];
    const resultado = valorEnMetros / factores[hacia];
    return resultado;
}
console.log(convertirUnidad(100, "cm", "m"));
console.log(convertirUnidad(2, "km", "m"));
console.log(convertirUnidad(10, "in", "cm"));
console.log(convertirUnidad(5, "ft", "m"));
console.log(convertirUnidad(1, "m", "km"));
//# sourceMappingURL=Conversor.js.map