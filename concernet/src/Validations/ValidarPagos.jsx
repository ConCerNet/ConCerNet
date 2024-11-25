function ValidarPagos({ direccion, fechaFactura, fechaVencimiento, entidadDePago }) {

    if (!direccion || direccion.length < 1) {
      throw new Error("La direccion no puede estar vacía");
    }
    if (direccion.length > 20) {
      throw new Error("La direccion no puede tener más de 20 caracteres");
    }
    if (direccion.length < 3) {
      throw new Error("La direccion no puede tener menos de 3 caracteres");
    }

    const fechaActual = new Date().toISOString().split("T")[0];
    const [diaFactura, mesFactura, anioFactura] = fechaFactura.split("/");
    const factura = new Date(`${anioFactura}/${mesFactura}/${diaFactura}`); 
    const [diaVencimiento, mesVencimiento, anioVencimiento] = fechaVencimiento.split("/");
    const vencimiento = new Date(`${anioVencimiento}/${mesVencimiento}/${diaVencimiento}`); 

    if (!fechaFactura) {
      throw new Error("La fecha de factura no puede estar vacía");
    }

    if (isNaN(factura.getTime())) {
      throw new Error("La fecha de la factura no es válida");
    }
    
    if (fechaFactura < fechaActual) {
      throw new Error("La fecha de la factura no puede ser una que ya pasó");
    }
    
    if (!fechaVencimiento) {
      throw new Error("La fecha de vencimiento no puede estar vacía");
    }
    
    if (isNaN(vencimiento.getTime())) {
      throw new Error("La fecha de vencimiento no es válida");
    }

    if (fechaVencimiento < fechaActual || fechaVencimiento <= fechaFactura) {
      throw new Error("La fecha de vencimiento debe ser mayor a la fecha actual y a la fecha de la factura");
    }
    
    const entidadesDePago = ["Mercado Pago", "Efectivo", "Transferencia"];
  
    if (!entidadDePago || entidadDePago === "default") {
      throw new Error("Debe seleccionar una opción para la entidad de pago");
    }

    if (!entidadesDePago.includes(entidadDePago)) {
      throw new Error("La opción seleccionada no es válida");
    }
  
    return {direccion, fechaFactura, fechaVencimiento, entidadDePago};
  }
  
  module.exports = ValidarPagos;
  