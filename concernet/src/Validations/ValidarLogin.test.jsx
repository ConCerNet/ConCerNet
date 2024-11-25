// import ValidarLogin from "./ValidarLogin";
const ValidarLogin = require("./ValidarLogin");

describe("Validar Login", () => {
  it("Datos de login correctos", () => {
    const resultado = ValidarLogin({
      username: "Juan123",
      password: "jjcarmona321",
    });
    expect(resultado).toEqual({
      username: "Juan123",
      password: "jjcarmona321",
    });
  });

  it("Usuario debajo del rango", () => {
    try {
      ValidarLogin({ 
        username: "Jose", 
        password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El nombre de usuario debe tener al menos 5 caracteres.");
    }
  });

  it("Usuario encima del rango", () => {
    try {
      ValidarLogin({ username: "JuanJose987654321", password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El nombre de usuario debe tener menos de 17 caracteres.");
    }
  });

  it("Usuario vacío", () => {
    try {
      ValidarLogin({ username: "", password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El nombre de usuario debe tener al menos 5 caracteres.");
    }
  });

  it("Contraseña debajo del rango", () => {
    try {
      ValidarLogin({ username: "Juan123", password: "Juan10" });
    } catch (error) {
      expect(error.message).toBe("La contraseña debe tener al menos 8 caracteres.");
    }
  });

  it("Contraseña encima del rango", () => {
    try {
      ValidarLogin({ username: "Juan123", password: "JuanJoseCarmona10" });
    } catch (error) {
      expect(error.message).toBe("La contraseña debe tener menos de 15 caracteres.");
    }
  });

  it("Contraseña vacía", () => {
    try {
      ValidarLogin({ username: "Juan123", password: "" });
    } catch (error) {
      expect(error.message).toBe("La contraseña debe tener al menos 8 caracteres.");
    }
  });
});
