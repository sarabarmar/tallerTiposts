interface Tarea {
    id: number;
    descripcion: string;
    completada: boolean;
    estado: "pendiente" | "en_progreso" | "finalizada";
}

function Tareas(tareas: Tarea[]) {
    return tareas.filter(
        tarea => tarea.estado === "pendiente" || tarea.estado === "en_progreso"
    );
}
const listaTareas: Tarea[] = [
    { id: 1, descripcion: "Estudiar TypeScript", completada: true, estado: "finalizada"},
    { id: 2, descripcion: "Estudiar Java", completada: false, estado: "en_progreso"},
    { id: 3, descripcion: "Estudiar C#", completada: false, estado: "pendiente"},
]

const tareasPendientes = Tareas (listaTareas)
    console.log(tareasPendientes);
    
