function Validarviviendas({ direccion, estado, precio, metrosCuadrados, habitaciones, baños, imagen }) {
    if (!direccion || direccion.length < 1) {
        throw new Error("La direccion no puede estar vacía");
    }
    if (direccion.length > 20) {
        throw new Error("La direccion no puede tener más de 20 caracteres");
    }
    if (direccion.length < 3) {
        throw new Error("La direccion no puede tener menos de 3 caracteres");
    }

    const estados = ["En venta", "En arriendo", "Vendida", "Arrendada", "No disponible"];

    if (!estado || estado === "default") {
        throw new Error("Debe seleccionar una opción para el estado de la vivienda");
    }
  
    if (!estados.includes(estado)) {
        throw new Error("La opción no es válida");
    }

    if (!precio) {
        throw new Error("El precio no puede estar vacío o ser menor a 1");
    }
    
    if (precio < 1) {
        throw new Error("El precio no puede ser menor a 1");
    }

    // if (precio.length < 6) {
    //     throw new Error("El precio debe tener al menos 6 dígitos");
    // }
    
    if (!metrosCuadrados) {
        throw new Error("El número de metros cuadrados no puede estar vacío o ser menor a 1");
    }
    
    if (metrosCuadrados < 1) {
        throw new Error("El número de metros cuadrados no puede ser menor a 1");
    }
    
    // if (metrosCuadrados.length < 2) {
    //     throw new Error("El número de metros cuadrados debe tener al menos 2 dígitos");
    // }

    if (!habitaciones) {
        throw new Error("El número de habitaciones no puede estar vacío o ser menor a 1");
    }

    if (habitaciones < 1) {
        throw new Error("El número de habitaciones no puede ser menor a 1");
    }

    if (!baños) {
        throw new Error("El número de baños no puede estar vacío o ser menor a 1");
    }

    if (baños < 1) {
        throw new Error("El número de baños no puede ser menor a 1");
    }

    // if (baños.length > 1) {
    //     throw new Error("El número de baños no puede ser mayor a 9");
    // }

    // Validación para la imagen
    if (!imagen) {
        throw new Error("Debe adjuntar una imagen");
    }

    // Extensiones permitidas
    const extensionesValidas = ["jpg", "jpeg", "png", "gif"];
    const extension = imagen.split(".").pop().toLowerCase();

    if (!extensionesValidas.includes(extension)) {
        throw new Error("El archivo debe ser una imagen en formato .jpg, .jpeg, .png o .gif");
    }

    // Opcional: Validar el tamaño del archivo si estás trabajando con un objeto `File`
    // if (imagen.size > 5 * 1024 * 1024) { // 5 MB
    //     throw new Error("El tamaño del archivo no debe exceder los 5 MB");
    // }
  
    return { direccion, estado, precio, metrosCuadrados, habitaciones, baños, imagen};
  }
  
  module.exports = Validarviviendas;