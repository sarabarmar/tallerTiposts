interface Usuario {
    nombre: string;
    edad: number;
    estadoActivo: boolean;
    rol: "admin" | "editor" | "visitante";
}
function mayorActivo(usuario: Usuario[]) {
    return usuario.filter(usuario =>
        usuario.edad >= 18 &&
        usuario.estadoActivo === true &&
        usuario.rol !== "visitante"
    )
}

const listaUsuarios: Usuario[] = [
    { nombre: "Sara", edad: 17, estadoActivo: true, rol: "admin" },
    { nombre: "Tatiana", edad: 21, estadoActivo: true, rol: "editor" },
    { nombre: "Carlos", edad: 23, estadoActivo: true, rol: "admin" },
    { nombre: "Ana", edad: 27, estadoActivo: true, rol: "visitante" },
]

console.log(mayorActivo(listaUsuarios));
