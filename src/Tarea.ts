interface Tarea{
    id : number;
    descripcion : string;
    completada : boolean;
    estado : "Pendiente" | "Progreso";
}