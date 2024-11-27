function ValidarPagos({ direccion, noCasa, descripcion, valor, fechaPago, estado, entidadDePago }) {

    //direccion
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

    //descripcion
    if(!descripcion || descripcion.length < 1) {
      throw new Error("La descripción no puede estar vacía");
    }
    
    if(descripcion.length > 45) {
      throw new Error("La descripción no puede tener más de 45 caracteres");
    }
    
    //valor
    if(!valor || valor < 1) {
      throw new Error("El valor no puede estar vacío ni en 0");
    }
    
    if(valor < 10000) {
      throw new Error("El valor a pagar no puede ser menor a 10000");
    }
    
    //fecha de pago
    const fechaActual = new Date().toISOString().split("T")[0];
    const [diaFactura, mesFactura, anioFactura] = fechaPago.split("/");
    const factura = new Date(`${anioFactura}/${mesFactura}/${diaFactura}`); 

    if (!fechaPago) {
      throw new Error("La fecha de pago no puede estar vacía");
    }
    
    if (fechaPago < fechaActual) {
      throw new Error("La fecha de pago no puede ser una que ya pasó");
    }
    
    //estado
    const estados = ["Pago", "Abono"];
  
    if (!estado || estados === "default") {
      throw new Error("Debe seleccionar un estado para el pago");
    }

    if (!estados.includes(estado)) {
      throw new Error("La opción seleccionada no es válida");
    }

    //entidad de pago
    const entidadesDePago = ["Mercado Pago", "Efectivo", "Transferencia"];
  
    if (!entidadDePago || entidadDePago === "default") {
      throw new Error("Debe seleccionar una opción para la entidad de pago");
    }

    if (!entidadesDePago.includes(entidadDePago)) {
      throw new Error("La opción seleccionada no es válida");
    }
  
    return {direccion, noCasa, descripcion, valor, fechaPago, estado, entidadDePago};
  }
  
  module.exports = ValidarPagos;
  