"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promedioPorCategoria(calificaciones, estudianteId) {
    const filtradas = calificaciones.filter(c => c.estudianteId === estudianteId);
    const resumen = {};
    const conteo = {};
    for (const c of filtradas) {
        resumen[c.categoria] = (resumen[c.categoria] || 0) + c.nota;
        conteo[c.categoria] = (conteo[c.categoria] || 0) + 1;
    }
    const promedios = {};
    for (const categoria in resumen) {
        const key = categoria;
        promedios[key] = resumen[key] / conteo[key];
    }
    return promedios;
}
const lista = [
    { estudianteId: "1", materia: "Matemáticas", categoria: "tareas", nota: 4.0 },
    { estudianteId: "1", materia: "Matemáticas", categoria: "tareas", nota: 3.5 },
    { estudianteId: "1", materia: "Matemáticas", categoria: "quices", nota: 4.2 },
    { estudianteId: "1", materia: "Matemáticas", categoria: "examen", nota: 3.8 },
    { estudianteId: "2", materia: "Inglés", categoria: "tareas", nota: 4.5 },
];
console.log(promedioPorCategoria(lista, "1"));
//# sourceMappingURL=Calificaciones.js.map