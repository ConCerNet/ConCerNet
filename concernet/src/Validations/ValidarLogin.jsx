function ValidarLogin({ username, password }) {
    if (!username || username.length < 5) {
      throw new Error("El nombre de usuario debe tener al menos 5 caracteres.");
    }
    if (username.length > 16) {
      throw new Error("El nombre de usuario debe tener menos de 17 caracteres.");
    }
    if (!password || password.length < 8) {
      throw new Error("La contraseña debe tener al menos 8 caracteres.");
    }
    if (password.length > 15) {
      throw new Error("La contraseña debe tener menos de 15 caracteres.");
    }
  
    return { username, password };
  }
  
  module.exports = ValidarLogin;