function ValidarLogin({ username, password }) {

    //username
    if (!username || username.length < 1) {
      throw new Error("El usuario no puede estar vacío");
    }
    if (username.length > 25) {
      throw new Error("El username no puede tener más de 25 caracteres");
    }

    //password
    if (!password || password.length < 1) {
      throw new Error("La contraseña no puede estar vacía");
    }
    if (password.length <  8) {
      throw new Error("La contraseña no puede tener menos de 8 caracteres");
    }
    if (password.length > 20) {
      throw new Error("La contraseña no puede tener más de 20 caracteres");
    }
  
    return { username, password };
  }
  
  module.exports = ValidarLogin;