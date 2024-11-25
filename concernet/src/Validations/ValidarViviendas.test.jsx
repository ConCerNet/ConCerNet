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
  
  it("Metros cuadrados menor a 0", () => {
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
  
  it("Formato de imágen inválido", () => {
    try {
      Validarviviendas({ 
        direccion: "Mz F Casa 7A",
        estado: "En arriendo",
        precio: 450000,
        metrosCuadrados: 157,
        habitaciones: 3,
        baños: 3,
        imagen: "casa.pdf",
      });
    } catch (error) {
      expect(error.message).toBe("El archivo debe ser una imagen en formato .jpg, .jpeg, .png o .gif");
    }
  });

  
});