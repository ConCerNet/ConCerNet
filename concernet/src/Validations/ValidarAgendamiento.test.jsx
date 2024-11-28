const validarAgendamiento = require("./ValidarAgendamiento");

describe("Validar Agendamiento", () => {
  it("Datos de agendamiento correctos", () => {
    const resultado = validarAgendamiento({
      idusuario: "1121357955",
      fechaagendamiento: "2024-11-30",
      horaInicio: "14:00",
      horaFin: "18:00",
    });
    expect(resultado).toEqual({
      idusuario: "1121357955",
      fechaagendamiento: "2024-11-30",
      horaInicio: "14:00",
      horaFin: "18:00",
    });
  });

  it("idUsuario vacío", () => {
    try {
      validarAgendamiento({
        idusuario: "",
        fechaagendamiento: "2024-11-30",
        horaInicio: "14:00",
        horaFin: "18:00",
      });
    } catch (error) {
      expect(error.message).toBe("La cedula no puede estar vacía");
    }
  });

  it("Fecha que ya pasó", () => {
    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: "2023-11-01",
        horaInicio: "14:00",
        horaFin: "18:00",
      });
    } catch (error) {
      expect(error.message).toBe("No puedes agendar con una fecha que ya pasó.");
    }
  });

  it("Fecha vacía", () => {
    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: "",
        horaInicio: "14:00",
        horaFin: "18:00",
      });
    } catch (error) {
      expect(error.message).toBe("La fecha no puede estar vacía");
    }
  });

  it("Hora de inicio vacía", () => {
    const fechaActual = new Date().toISOString().split("T")[0];
    // const horaActual = new Date().toTimeString().split(" ")[0];

    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: fechaActual,
        horaInicio: "",
        horaFin: "18:00",
      });
    } catch (error) {
      expect(error.message).toBe("La hora de inicio no puede estar vacía");
    }
  });
  
  it("Hora de inicio menor a hora actual", () => {
    const fechaActual = new Date().toISOString().split("T")[0];
    const horaActual = new Date().toTimeString().split(" ")[0];

    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: fechaActual,
        horaInicio: horaActual,
        horaFin: "18:00",
      });
    } catch (error) {
      expect(error.message).toBe("El horario no está disponible.");
    }
  });

  it("Hora de finalizacion vacía", () => {
    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: "2024-11-30",
        horaInicio: "15:00",
        horaFin: "",
      });
    } catch (error) {
      expect(error.message).toBe("La hora de finalizacion no puede estar vacía");
    }
  });
  
  it("Hora de Inicio mayor o igual a hora de Finalizacion", () => {
    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: "2024-11-30",
        horaInicio: "15:00",
        horaFin: "14:00",
      });
    } catch (error) {
      expect(error.message).toBe("Los horarios no son correctos.");
    }
  });

  it("Diferencia de horarios menor a 1 hora", () => {
    try {
      validarAgendamiento({
        idusuario: "1121357955",
        fechaagendamiento: "2024-11-30",
        horaInicio: "14:00",
        horaFin: "14:30",
      });
    } catch (error) {
      expect(error.message).toBe(
        "La diferencia entre la hora de inicio y la hora de fin debe ser de al menos 1 hora."
      );
    }
  });
});
