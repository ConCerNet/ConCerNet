const ValidarUsuarios = require("./ValidarUsuarios");

describe("Validar Usuarios", () => {
  it("Datos de usuario correctos", () => {
    const resultado = ValidarUsuarios({
      tipoDocumento: "CC",
      noDocumento: "1065121521",
      nombres: "Carmen",
      apellidos: "Gutierrez",
      direccion: "Mz F",
      noCasa: "18",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    expect(resultado).toEqual({
      tipoDocumento: "CC",
      noDocumento: "1065121521",
      nombres: "Carmen",
      apellidos: "Gutierrez",
      direccion: "Mz F",
      noCasa: "18",
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
        nombres: "Carmen",
        apellidos: "Gutierrez",
        direccion: "Mz F",
        noCasa: "18",
        telefono: "3186934810",
        email: "carmengutierrez@gmail.com",
        contraseña: "Carmen12345",
        fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("Debe seleccionar un tipo de documento");
    }
  });
  
  it("Tipo de Documento diferente", () => {
    try {
      ValidarUsuarios({ 
      tipoDocumento: "CCC",
      noDocumento: "1065121521",
      nombres: "Carmen",
      apellidos: "Gutierrez",
      direccion: "Manzana F",
      noCasa: "18",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("La opción seleccionada no es válida");
    }
  });

  it("Numero de documento vacío", () => {
    try {
      ValidarUsuarios({ 
        tipoDocumento: "CC",
        noDocumento: "",
        nombres: "Carmen",
        apellidos: "Gutierrez",
        direccion: "Mz F",
        noCasa: "18",
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
        nombres: "Carmen",
        apellidos: "Gutierrez",
        direccion: "Mz F",
        noCasa: "18",
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
        noDocumento: "106512164794",
        nombres: "Carmen",
        apellidos: "Gutierrez",
        direccion: "Mz F",
        noCasa: "18",
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
        noDocumento: "1065121654",
        nombres: "",
        apellidos: "Gutierrez",
        direccion: "Mz F",
        noCasa: "18",
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
      nombres: "Juan Esteban Andres Felipe",
      apellidos: "Gutierrez",
      direccion: "Mz F",
      noCasa: "18",
      telefono: "3186934810",
      email: "carmengutierrez@gmail.com",
      contraseña: "Carmen12345",
      fechaNacimiento: "15/08/2006",
    });
    } catch (error) {
      expect(error.message).toBe("El nombre no puede tener más de 25 caracteres");
    }
  });
  
  
  it("Apellidos vacío", () => {
      try {
          ValidarUsuarios({ 
              tipoDocumento: "CC",
              noDocumento: "1045712445",
              nombres: "Carmen",
              apellidos: "",
              direccion: "Mz F",
              noCasa: "18",
              telefono: "3186934810",
              email: "carmengutierrez@gmail.com",
              contraseña: "Carmen12345",
              fechaNacimiento: "15/08/2006",
            });
        } catch (error) {
            expect(error.message).toBe("El apellido no puede estar vacío");
        }
    });
    
    it("Apellidos de más de 30 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez Gonzalez Carmona Peralta",
          direccion: "Mz F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El apellido no puede tener más de 30 caracteres");
      }
    });
    
    it("Direccion vacía", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede estar vacía");
      }
    });
    
    it("Direccion de más de 15 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Cra 33B # 20 A-34",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede tener más de 15 caracteres");
      }
    });
    
    it("Direccion de menos de 4 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "MzF",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La direccion no puede tener menos de 4 caracteres");
      }
    });
    
    it("Número de la casa Vacío", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Mz F",
          noCasa: "",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El número de la casa no puede estar vacío");
      }
    });
    
    it("Número de la casa de más de 5 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Mz F",
          noCasa: "1126AB",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El número de la casa no puede tener más de 5 caracteres");
      }
    });
    
    it("Telefono vacío", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "318693481",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El email no puede estar vacío");
      }
    });
    
    it("Email de menos de 12 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "c@gmail.com",
          contraseña: "Carmen12345",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("El email no puede tener menos de 12 caracteres");
      }
    });
    
    it("Email de más de 30 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrezhernandez@gmail.com",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "Carmen2",
          fechaNacimiento: "15/08/2006",
      });
      } catch (error) {
        expect(error.message).toBe("La contraseña debe tener al menos 8 caracteres");
      }
    });
    
    it("Contraseña de más de 20 caracteres", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "CarmenGutierrez54321",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "CarmenGutierrez321",
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
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "CarmenGutierrez54321",
          fechaNacimiento: "2000/08/27",
      });
      } catch (error) {
        expect(error.message).toBe("La fecha de nacimiento no es válida");
      }
    });
    
    it("Más de 18 años", () => {
      try {
        ValidarUsuarios({ 
          tipoDocumento: "CC",
          noDocumento: "1045712445",
          nombres: "Carmen",
          apellidos: "Gutierrez",
          direccion: "Manzana F",
          noCasa: "18",
          telefono: "3186934810",
          email: "carmengutierrez@gmail.com",
          contraseña: "CarmenGutierrez54321",
          fechaNacimiento: "15/08/2024",
      });
      } catch (error) {
        expect(error.message).toBe("Debe ser mayor de 18 años");
      }
    });
  
});
