const ValidarPagos = require("./ValidarPagos");

describe("Validar Pagoss", () => {


    it("Datos de pagos correctos", () => {
        const resultado = ValidarPagos({
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo",  
        });
        expect(resultado).toEqual({
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo",
        });
    });

    it("Direccion vacía", () => {
        try {
          ValidarPagos({ 
            direccion: "",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La direccion no puede estar vacía");
        }
    });
    
    it("Direccion de más de 20 caracteres", () => {
        try {
          ValidarPagos({ 
            direccion: "Cra 33B #20A-34 Calle 4",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La direccion no puede tener más de 20 caracteres");
        }
    });
    
    it("Direccion de menos de 3 caracteres", () => {
        try {
          ValidarPagos({ 
            direccion: "Cr",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La direccion no puede tener menos de 3 caracteres");
        }
    });
    
    it("Fecha de factura vacía", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de factura no puede estar vacía");
        }
    });
    
    it("Fecha de factura con formato inválido", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "2024/12/28",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de la factura no es válida");
        }
    });
    
    it("Fecha de factura menor a la fecha actual", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "20/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de la factura no puede ser una que ya pasó");
        }
    });
    
    it("Fecha de vencimiento vacía", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de vencimiento no puede estar vacía");
        }
    });
    
    it("Fecha de vencimiento con formato inválido", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "2024/12/28",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de vencimiento no es válida");
        }
    });
    
    it("Fecha de vencimiento menor a la fecha actual", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "23/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de vencimiento debe ser mayor a la fecha actual y a la fecha de la factura");
        }
    });
    
    it("Fecha de vencimiento menor a la fecha de factura", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "20/11/2024",
            entidadDePago: "Efectivo", 
        });
        } catch (error) {
          expect(error.message).toBe("La fecha de vencimiento debe ser mayor a la fecha actual y a la fecha de la factura");
        }
    });
    
    it("Entidad de pago vacía", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "", 
        });
        } catch (error) {
          expect(error.message).toBe("Debe seleccionar una opción para la entidad de pago");
        }
    });
    
    it("Entidad de pago sin eleccion", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "default", 
        });
        } catch (error) {
          expect(error.message).toBe("Debe seleccionar una opción para la entidad de pago");
        }
    });
    
    it("Entidad de pago inválida", () => {
        try {
          ValidarPagos({ 
            direccion: "Mz F Casa 7A",
            fechaFactura: "24/11/2024",
            fechaVencimiento: "28/11/2024",
            entidadDePago: "Tarjeta de Credito", 
        });
        } catch (error) {
          expect(error.message).toBe("La opción seleccionada no es válida");
        }
    });

});
