// import ValidarLogin from "./ValidarLogin";
const ValidarLogin = require("./ValidarLogin");

describe("Validar Login", () => {
  it("Datos de login correctos", () => {
    const resultado = ValidarLogin({
      username: "JuanCarmona",
      password: "jjcarmona321",
    });
    expect(resultado).toEqual({
      username: "JuanCarmona",
      password: "jjcarmona321",
    });
  });

  it("Usuario vacío", () => {
    try {
      ValidarLogin({ username: "", password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El usuario no puede estar vacío");
    }
  });

  it("Usuario debajo del rango", () => {
    try {
      ValidarLogin({ 
        username: "", 
        password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El usuario no puede estar vacío");
    }
  });
  
  it("Usuario encima del rango", () => {
    try {
      ValidarLogin({ 
        username: "JuanEstebanCarmonaPeraltaa", 
        password: "jjcarmona321" });
    } catch (error) {
      expect(error.message).toBe("El username no puede tener más de 25 caracteres");
    }
  });

  it("Contraseña vacía", () => {
    try {
      ValidarLogin({ username: "Juan123", password: "" });
    } catch (error) {
      expect(error.message).toBe("La contraseña no puede estar vacía");
    }
  });

  it("Contraseña debajo del rango", () => {
    try {
      ValidarLogin({ 
        username: "JuanCarmona", 
        password: "JuanCar" });
    } catch (error) {
      expect(error.message).toBe("La contraseña no puede tener menos de 8 caracteres");
    }
  });

  it("Contraseña encima del rango", () => {
    try {
      ValidarLogin({ 
        username: "JuanCarmona", 
        password: "JuanJJoseCarmonaortiz" });
    } catch (error) {
      expect(error.message).toBe("La contraseña no puede tener más de 20 caracteres");
    }
  });
});
