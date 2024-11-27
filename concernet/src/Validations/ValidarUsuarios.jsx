function ValidarUsuarios({ tipoDocumento, noDocumento, nombres, apellidos, direccion, noCasa, telefono, fechaNacimiento, email, contraseña }) {
    
    //Tipo de documento
    const tiposDeDocumentos = ["CC", "CE", "PP"];

    if (!tipoDocumento || tiposDeDocumentos === "default") {
      throw new Error("Debe seleccionar un tipo de documento");
    }
    if (!tiposDeDocumentos.includes(tipoDocumento)) {
      throw new Error("La opción seleccionada no es válida");
    }

    //Número de documento
    if (!noDocumento || noDocumento.length < 1) {
      throw new Error("El número de documento no puede estar vacío");
    }
    if (noDocumento.length <= 7) {
      throw new Error("El número de documento debe tener al menos 8 digitos");
    }
    if (noDocumento.length >= 11) {
      throw new Error("El número de documento no puede tener más de 10 dígitos");
    }

    //Nombres
    if (!nombres || nombres.length < 1) {
      throw new Error("El nombre no puede estar vacío");
    }
    if (nombres.length > 25) {
      throw new Error("El nombre no puede tener más de 25 caracteres");
    }

    //Apellidos
    if (!apellidos || apellidos.length < 1) {
      throw new Error("El apellido no puede estar vacío");
    }
    if (apellidos.length > 25) {
      throw new Error("El apellido no puede tener más de 25 caracteres");
    }

    //Dirección
    if (!direccion || direccion.length < 1) {
      throw new Error("La direccion no puede estar vacía");
    }
    if (direccion.length > 15) {
      throw new Error("La direccion no puede tener más de 15 caracteres");
    }
    if (direccion.length < 4) {
      throw new Error("La direccion no puede tener menos de 4 caracteres");
    }

    //numero de casa
    if (!noCasa || noCasa.length < 1) {
      throw new Error("El número de la casa no puede estar vacío");
    }
    if (noCasa.length > 10) {
      throw new Error("El número de la casa no puede tener más de 10 caracteres");
    } 

    //telefono
    if (!telefono || telefono.length < 1) {
      throw new Error("El teléfono no puede estar vacío");
    }
    if (telefono.length > 10 || telefono.length < 10) {
      throw new Error("El teléfono debe tener 10 dígitos");
    }

    //email
    if (!email || email.length < 1) {
      throw new Error("El email no puede estar vacío");
    }
    if (email.length < 12) {
      throw new Error("El email no puede tener menos de 12 caracteres");
    }
    if (email.length > 30) {
      throw new Error("El email no puede tener más de 30 caracteres");
    }

    //contraseña
    if (!contraseña || contraseña.length < 1) {
      throw new Error("La contraseña no puede estar vacía");
    }
    if (contraseña.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres");
    }
    if (contraseña.length > 20) {
      throw new Error("La contraseña no puede tener más de 20 caracteres");
    }

    // Fecha de nacimiento
    const fechaActual = new Date();
    const [dia, mes, anio] = fechaNacimiento.split("/");
    const birthday = new Date(`${anio}/${mes}/${dia}`); // Formato YYYY-MM-DD

    if (!fechaNacimiento) {
        throw new Error("La fecha de nacimiento no puede estar vacía");
    }

    if (isNaN(birthday.getTime())) {
        throw new Error("La fecha de nacimiento no es válida");
    }

    const edad = fechaActual.getFullYear() - birthday.getFullYear();
    const mesDiferencia = fechaActual.getMonth() - birthday.getMonth();
    const diaDiferencia = fechaActual.getDate() - birthday.getDate();

    if (edad < 18 || (edad === 18 && (mesDiferencia < 0 || (mesDiferencia === 0 && diaDiferencia < 0)))) {
        throw new Error("Debe ser mayor de 18 años");
    }

  
    return { tipoDocumento, noDocumento, nombres, apellidos, direccion, noCasa, telefono, email, contraseña, fechaNacimiento};
  }
  
  module.exports = ValidarUsuarios;