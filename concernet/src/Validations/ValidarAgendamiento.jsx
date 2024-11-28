function validarAgendamiento({ idusuario, fechaagendamiento, horaInicio, horaFin }) {
    const fechaActual = new Date().toISOString().split("T")[0];
    const horaActual = new Date().toTimeString().split(" ")[0];

    //id usuario
    if (!idusuario) {
      throw new Error("La cedula no puede estar vacía");
    }
    
    if (idusuario.length < 8 || idusuario < 10000000) {
      throw new Error("La cedula no puede tener menos de 8 dígitos");
    }
    
    if (idusuario.length > 10 || idusuario > 9999999999) {
      throw new Error("La cedula no puede tener más de 10 dígitos");
    }

    //fecha de agendamiento
    if (!fechaagendamiento) {
      throw new Error("La fecha no puede estar vacía");
    }
  
    if (fechaagendamiento < fechaActual) {
      throw new Error("No puedes agendar con una fecha que ya pasó.");
    }

    //hora de inicio
    if (!horaInicio) {
      throw new Error("La hora de inicio no puede estar vacía");
    }

    //horario no disponible
    if (fechaagendamiento === fechaActual && horaInicio <= horaActual) {
      throw new Error("El horario no está disponible.");
    }
  
    //hora de finalizacion
    if (!horaFin) {
      throw new Error("La hora de finalizacion no puede estar vacía");
    }

    //hora inicio >= hora fin
    if (horaInicio >= horaFin) {
      throw new Error("Los horarios no son correctos.");
    }
  
    //diferencia horas
    const horaInicioDate = new Date(`1970-01-01T${horaInicio}:00`);
    const horaFinDate = new Date(`1970-01-01T${horaFin}:00`);
    const diferenciaHoras = (horaFinDate - horaInicioDate) / (1000 * 60 * 60);
  
    if (diferenciaHoras < 1) {
      throw new Error(
        "La diferencia entre la hora de inicio y la hora de fin debe ser de al menos 1 hora."
      );
    }
  
    return {idusuario, fechaagendamiento, horaInicio, horaFin};
  }
  
  module.exports = validarAgendamiento;
  