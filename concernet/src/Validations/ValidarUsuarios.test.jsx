const ValidarUsuarios = require("./ValidarUsuarios");

describe("Validar Usuarios", () => {
  it("Datos de usuario correctos", () => {
    const resultado = ValidarUsuarios({
      tipoDocumento: "CC",
      noDocumento: "1065121521",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    expect(resultado).toEqual({
        tipoDocumento: "CC",
        noDocumento: "1065121521",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
    });
  });

  it("Tipo de Documento vacío", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "",
      noDocumento: "1065121521",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El tipo de documento no puede estar vacío");
    }
  });
  
  it("Tipo de Documento diferente a 2 caracteres", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CCC",
      noDocumento: "1065121521",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El tipo de documento debe tener 2 caracteres");
    }
  });

  it("Numero de documento vacío", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CC",
      noDocumento: "",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El número de documento no puede estar vacío");
    }
  });
  
  it("Numero de documento menor a 8 dígitos", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CC",
      noDocumento: "1065121",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El número de documento debe tener al menos 8 digitos");
    }
  });
  
  it("Numero de documento mayor a 10 dígitos", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CC",
      noDocumento: "10654457124",
      nombre: "Carmen",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El número de documento no puede tener más de 10 dígitos");
    }
  });
  
  it("Nombre vacío", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CC",
      noDocumento: "1045712445",
      nombre: "",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El nombre no puede estar vacío");
    }
  });
  
  it("Nombre de más de 25 caracteres", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CC",
      noDocumento: "1045712445",
      nombre: "Juan Esteban Andres Felipe",
      apellido: "Gutierrez",
      direccion: "Mz F Casa 7A",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El nombre no puede tener más de 25 caracteres");
    }
  });
  
  
  it("Apellido vacío", () => {
      try {
          ValidarUsuarios({ 
              tipoDocumento: "CC",
              noDocumento: "1045712445",
              nombre: "Carmen",
              apellido: "",
              direccion: "Mz F Casa 7A",
              telefono: "3186934810",
              email: "carmengutierrez@gmail.com",
              contraseña: "Carmen12345",
              fechaNacimiento: "15/08/2006",
            });
        } catch (error) {
            expect(error.message).toBe("El apellido no puede estar vacío");
        }
    });
    
    it("Apellido de más de 25 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez Gonzalez Carmona Peralta",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El apellido no puede tener más de 25 caracteres");
      }
    });
    
    it("Direccion vacía", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede estar vacía");
      }
    });
    
    it("Direccion de más de 20 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Cra 33B #20A-34 Calle 4",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede tener más de 20 caracteres");
      }
    });
    
    it("Direccion de menos de 3 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Cr",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede tener menos de 3 caracteres");
      }
    });
    
    it("Telefono vacío", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El teléfono no puede estar vacío");
      }
    });
    
    it("Telefono diferente a 10 digitos", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El teléfono debe tener 10 dígitos");
      }
    });
    
    it("Email vacío", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El email no puede estar vacío");
      }
    });
    
    it("Email de menos de 10 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "@gmail.co",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El email no puede tener menos de 10 caracteres");
      }
    });
    
    it("Email de más de 30 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "claudiagutierrezarroyo@gmail.co",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El email no puede tener más de 30 caracteres");
      }
    });
    
    it("Contraseña vacía", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La contraseña no puede estar vacía");
      }
    });
    
    it("Contraseña de menos de 8 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "carmen",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La contraseña debe tener al menos 8 caracteres");
      }
    });
    
    it("Contraseña de menos de 8 caracteres", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "carmensoniagutierrez123",
        fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La contraseña no puede tener más de 20 caracteres");
      }
    });
    
    it("Fecha de nacimiento vacía", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "carmen12345",
        fechaNacimiento: "",
      });
      } catch (error) {
        expect(error.message).toBe("La fecha de nacimiento no puede estar vacía");
      }
    });
    
    it("Fecha de nacimiento con formato inválido", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "carmen12345",
        fechaNacimiento: "2024/08/15",
      });
      } catch (error) {
        expect(error.message).toBe("La fecha de nacimiento no es válida");
      }
    });
    
    it("Fecha de nacimiento con formato inválido", () => {
      try {
        ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "1045712445",
        nombre: "Carmen",
        apellido: "Gutierrez",
        direccion: "Mz F Casa 7A",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.co",
        contraseña: "carmen12345",
        fechaNacimiento: "23/11/2010",
      });
      } catch (error) {
        expect(error.message).toBe("Debe ser mayor de 18 años");
      }
    });
  
});
