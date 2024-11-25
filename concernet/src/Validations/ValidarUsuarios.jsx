function ValidarUsuarios({ tipoDocumento, noDocumento, nombres, apellidos, direccion, telefono, email, contraseña, fechaNacimiento, rol }) {
    const tiposDeDocumentos = ["CC", "CE", "PP"];


    if (!tipoDocumento || tiposDeDocumentos === "default") {
      throw new Error("Debe seleccionar un tipo de documento");
    }
    if (!tiposDeDocumentos.includes(tipoDocumento)) {
      throw new Error("La opción seleccionada no es válida");
    }
    if (!noDocumento || noDocumento.length < 1) {
      throw new Error("El número de documento no puede estar vacío");
    }
    if (noDocumento.length <= 7) {
      throw new Error("El número de documento debe tener al menos 8 digitos");
    }
    if (noDocumento.length >= 11) {
      throw new Error("El número de documento no puede tener más de 10 dígitos");
    }
    if (!nombres || nombres.length < 1) {
      throw new Error("El nombre no puede estar vacío");
    }
    if (nombres.length > 25) {
      throw new Error("El nombre no puede tener más de 25 caracteres");
    }
    if (!apellidos || apellidos.length < 1) {
      throw new Error("El apellido no puede estar vacío");
    }
    if (apellidos.length > 25) {
      throw new Error("El apellido no puede tener más de 25 caracteres");
    }
    if (!direccion || direccion.length < 1) {
      throw new Error("La direccion no puede estar vacía");
    }
    if (direccion.length > 20) {
      throw new Error("La direccion no puede tener más de 20 caracteres");
    }
    if (direccion.length < 3) {
      throw new Error("La direccion no puede tener menos de 3 caracteres");
    }
    if (!telefono || telefono.length < 1) {
      throw new Error("El teléfono no puede estar vacío");
    }
    if (telefono.length > 10 || telefono.length < 10) {
      throw new Error("El teléfono debe tener 10 dígitos");
    }
    if (!email || email.length < 1) {
      throw new Error("El email no puede estar vacío");
    }
    if (email.length < 10) {
      throw new Error("El email no puede tener menos de 10 caracteres");
    }
    if (email.length > 30) {
      throw new Error("El email no puede tener más de 30 caracteres");
    }
    if (!contraseña || contraseña.length < 1) {
      throw new Error("La contraseña no puede estar vacía");
    }
    if (contraseña.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres");
    }
    if (contraseña.length > 20) {
      throw new Error("La contraseña no puede tener más de 20 caracteres");
    }

    // Validación de fecha de nacimiento
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
    
    const roles = ["Arrendatario", "Propietario"];

    if (!rol || rol === "default") {
      throw new Error("Debe seleccionar una opción para el rol del usuario");
    }
    if (!roles.includes(rol)) {
      throw new Error("La opción seleccionada no es válida");
    }
  
    return { tipoDocumento, noDocumento, nombres, apellidos, direccion, telefono, email, contraseña, fechaNacimiento, rol };
  }
  
  module.exports = ValidarUsuarios;