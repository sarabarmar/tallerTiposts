interface Calificacion {
  estudianteId: string;
  materia: string;
  categoria: "tareas" | "quices" | "examen";
  nota: number;
}

function promedioPorCategoria(
  calificaciones: Calificacion[],
  estudianteId: string
) {
  const filtradas = calificaciones.filter(c => c.estudianteId === estudianteId);

  const resumen: { [key in Calificacion["categoria"]]?: number } = {};
  const conteo: { [key in Calificacion["categoria"]]?: number } = {};

  for (const c of filtradas) {
    resumen[c.categoria] = (resumen[c.categoria] || 0) + c.nota;
    conteo[c.categoria] = (conteo[c.categoria] || 0) + 1;
  }

  const promedios: { [key in Calificacion["categoria"]]?: number } = {};
  for (const categoria in resumen) {
    const key = categoria as Calificacion["categoria"];
    promedios[key] = resumen[key]! / conteo[key]!;
  }

  return promedios;
}

const lista: Calificacion[] = [
  { estudianteId: "1", materia: "Matemáticas", categoria: "tareas", nota: 4.0 },
  { estudianteId: "1", materia: "Matemáticas", categoria: "tareas", nota: 3.5 },
  { estudianteId: "1", materia: "Matemáticas", categoria: "quices", nota: 4.2 },
  { estudianteId: "1", materia: "Matemáticas", categoria: "examen", nota: 3.8 },
  { estudianteId: "2", materia: "Inglés", categoria: "tareas", nota: 4.5 },
];

console.log(promedioPorCategoria(lista, "1"));
