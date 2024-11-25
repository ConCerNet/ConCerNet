const Validarviviendas = require("./ValidarViviendas");

describe("Validar Login", () => {
  it("Datos de vivienda correctos", () => {
    const resultado = Validarviviendas({
      direccion: "Mz F Casa 7A",
      estado: "En arriendo",
      precio: 450000,
      metrosCuadrados: 157,
      habitaciones: 3,
      baños: 3,
      imagen: "casa.png",
    });
    expect(resultado).toEqual({
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
    });
  });

  it("Direccion vacía", () => {
    try {
      Validarviviendas({ 
        direccion: "",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("La direccion no puede estar vacía");
    }
  });
  
  it("Direccion de más de 20 caracteres", () => {
    try {
      Validarviviendas({ 
        direccion: "Cra 33B #20A-34 Calle 4",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("La direccion no puede tener más de 20 caracteres");
    }
  });
  
  it("Direccion de menos de 3 caracteres", () => {
    try {
      Validarviviendas({ 
        direccion: "Cr",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("La direccion no puede tener menos de 3 caracteres");
    }
  });
  
  it("Estado vacío", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("Debe seleccionar una opción para el estado de la vivienda");
    }
  });
  
  it("Estado por defecto", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "default",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("Debe seleccionar una opción para el estado de la vivienda");
    }
  });
  
  it("Estado inválido", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "Compraventa",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("La opción no es válida");
    }
  });
  
  it("Precio vacío o en 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 0,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El precio no puede estar vacío o ser menor a 1");
    }
  });
  
  it("Precio menor a 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: -450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El precio no puede ser menor a 1");
    }
  });
  
  it("Metros cuadrados vacío o en 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 0,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de metros cuadrados no puede estar vacío o ser menor a 1");
    }
  });
  
  it("Metros cuadrados menor a 1", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: -157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de metros cuadrados no puede ser menor a 1");
    }
  });
 
  it("Metros cuadrados de un dígito", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 5,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de metros cuadrados debe tener al menos 2 dígitos");
    }
  });
  
  it("Habitaciones vacías o en 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 0,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de habitaciones no puede estar vacío o ser menor a 1");
    }
  });
  
  it("Habitaciones menor a 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: -3,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de habitaciones no puede ser menor a 1");
    }
  });
  
  it("Habitaciones mayor a 9", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 15,
        baños: 3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de habitaciones no puede ser mayor a 9");
    }
  });
  
  it("Baños vacíos o en 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 0,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de baños no puede estar vacío o ser menor a 1");
    }
  });
  
  it("Baños menor a 0", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: -3,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de baños no puede ser menor a 1");
    }
  });
  
  it("Baños mayor a 9", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 15,
        imagen: "casa.png",
      });
    } catch (error) {
      expect(error.message).toBe("El número de baños no puede ser mayor a 9");
    }
  });
  
  it("Imagen vacía", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "",
      });
    } catch (error) {
      expect(error.message).toBe("Debe adjuntar una imagen");
    }
  });
  
  // it("Imagen de más de 10 MB", () => {
  //   try {

  //     const tamañoImagen = { size: 15 * 1024 * 1024 };

  //     Validarviviendas({ 
  //       direccion: "Mz F Casa 7A",
  //       estado: "En arriendo",
  //       precio: 450000,
  //       metrosCuadrados: 157,
  //       habitaciones: 3,
  //       baños: 3,
  //       imagen: tamañoImagen,
  //     });
  //   } catch (error) {
  //     expect(error.message).toBe("El tamaño del archivo no debe exceder los 10 MB");
  //   }
  // });

  
});