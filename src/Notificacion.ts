type Notificacion =
  | {
      tipo: "email";
      destinatario: string;
      asunto: string;
      mensaje: string;
    }
  | {
      tipo: "SMS";
      numero: string;
      mensaje: string;
    }
  | {
      tipo: "push";
      dispositivoId: string;
      titulo: string;
      cuerpo: string;
    };

function enviarNotificacion(notificacion: Notificacion) {
  if (notificacion.tipo === "email") {
    console.log(`Enviando EMAIL a ${notificacion.destinatario}: ${notificacion.asunto}`);
  } else if (notificacion.tipo === "SMS") {
    console.log(`Enviando SMS al número ${notificacion.numero}: ${notificacion.mensaje}`);
  } else if (notificacion.tipo === "push") {
    console.log(`Enviando PUSH al dispositivo ${notificacion.dispositivoId}: ${notificacion.titulo}`);
  }
}

const n1: Notificacion = { tipo: "email", destinatario: "sara@example.com", asunto: "Hola", mensaje: "Bienvenida" };
const n2: Notificacion = { tipo: "SMS", numero: "3001234567", mensaje: "Código de verificación" };
const n3: Notificacion = { tipo: "push", dispositivoId: "XYZ123", titulo: "Alerta", cuerpo: "Tienes un nuevo mensaje" };

enviarNotificacion(n1);
enviarNotificacion(n2);
enviarNotificacion(n3);
