import { ROLES } from "./usuariosCostantes.js";

export function  crearUsuario (nombre, rol){
    const fechaRegistro = new Date().toLocaleDateString("es-CO");
    return {
        nombre,
        rol,
        fechaRegistro
    };

}

export function esAdmin(usuario) {
  return usuario.rol === ROLES.ADMIN;
}

