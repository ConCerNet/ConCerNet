function ValidarPagos({ direccion, descripcion, valor, fechaPago, estado, entidadDePago }) {

    if (!direccion || direccion.length < 1) {
      throw new Error("La direccion no puede estar vacía");
    }
    if (direccion.length > 20) {
      throw new Error("La direccion no puede tener más de 20 caracteres");
    }
    if (direccion.length < 3) {
      throw new Error("La direccion no puede tener menos de 3 caracteres");
    }

    if(!descripcion || descripcion.length < 1) {
      throw new Error("La descripción no puede estar vacía");
    }
    
    if(descripcion.length > 45) {
      throw new Error("La descripción no puede tener más de 45 caracteres");
    }
    
    if(!valor || valor < 1) {
      throw new Error("El valor no puede estar vacío ni en 0");
    }
    
    if(valor < 10000) {
      throw new Error("El valor a pagar no puede ser menor a 10000");
    }
    
    const fechaActual = new Date().toISOString().split("T")[0];
    const [diaFactura, mesFactura, anioFactura] = fechaPago.split("/");
    const factura = new Date(`${anioFactura}/${mesFactura}/${diaFactura}`); 

    if (!fechaPago) {
      throw new Error("La fecha de pago no puede estar vacía");
    }
    
    if (fechaPago < fechaActual) {
      throw new Error("La fecha de pago no puede ser una que ya pasó");
    }

    if (isNaN(factura.getTime())) {
      throw new Error("El formato de la fecha de pago no es válido");
    }

    
    const estados = ["Mercado Pago", "Efectivo", "Transferencia"];
  
    if (!estado || estados === "default") {
      throw new Error("Debe seleccionar un estado para el pago");
    }

    if (!estados.includes(estado)) {
      throw new Error("La opción seleccionada no es válida");
    }

    const entidadesDePago = ["Mercado Pago", "Efectivo", "Transferencia"];
  
    if (!entidadDePago || entidadDePago === "default") {
      throw new Error("Debe seleccionar una opción para la entidad de pago");
    }

    if (!entidadesDePago.includes(entidadDePago)) {
      throw new Error("La opción seleccionada no es válida");
    }
  
    return {direccion, descripcion, valor, fechaPago, estado, entidadDePago};
  }
  
  module.exports = ValidarPagos;
  