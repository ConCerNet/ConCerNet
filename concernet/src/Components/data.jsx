export const usuarios = [
    {
      id: 1,
      tipoDocumento: "CC",
      noDocumento: 123456789,
      nombres: "Ana Carolina",
      apellidos: "Hernandez Diaz",
      direccion: "Manzana I",
      noCasa: "10",
      telefono: 3045161578,
      email: "ana.hernandez@ejemplo.com",
      // rol: "Arrendatario",
      contraseña: "anahernandez123",
      fechaNacimiento: "2000-10-10",
    },
    {
      id: 2,
      tipoDocumento: "CC",
      noDocumento: 987654321,
      nombres: "Carlos Alberto",
      apellidos: "Guillen Herrera",
      direccion: "Manzana G",
      noCasa: "9",
      telefono: 3044656158,
      email: "carlos.guillen@ejemplo.com",
      // rol: "Propietario",
      contraseña: "carlosguillen123",
      fechaNacimiento: "2000-10-22,"
    }
  ]
  
  export const viviendas = [
    {
      id: 1,
      direccion: "Mz F Casa 9B",
      estado: "En Venta",
      precio: 150000000,
      metrosCuadrados: 120,
      habitaciones: 3,
      baños: 2,
      ImagenVivienda:
        "https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg",
    },
    {
      id: 2,
      direccion: "Mz B Casa 1A",
      estado: "En Venta",
      precio: 200000000,
      metrosCuadrados: 120,
      habitaciones: 3,
      baños: 2,
      ImagenVivienda:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
    },
    {
      id: 3,
      direccion: "Mz E Casa 5B",
      estado: "En Arriendo",
      precio: 680000,
      metrosCuadrados: 250,
      habitaciones: 4,
      baños: 3,
      ImagenVivienda:
        "https://arquitectopablorestrepo.com/wp-content/uploads/2024/06/Diseno-casa-campestre-La-Morada-1-600x600.jpg",
    },
    {
      id: 4,
      direccion: "Mz H Casa 4A",
      estado: "En Arriendo",
      precio: 700000,
      metrosCuadrados: 250,
      habitaciones: 4,
      baños: 3,
      ImagenVivienda:
        "https://www.construyehogar.com/wp-content/uploads/2016/01/Casa-moderna-un-piso.jpg",
    }
  ]
  
  export const pagos = [
    {
      id: 1,
      direccion: "Mz F Casa 10B",
      titular: "Ana Carolina Hernandez",
      descripcion: "Cuota mensual noviembre",
      valor: 150000,
      fechaPago: "2024-11-22",
      estado: "Abono",
      entidadDePago: "Efectivo"
    },
    {
      id: 2,
      direccion: "Mz b Casa 7A",
      titular: "Carlos Alberto Guillen",
      descripcion: "Cuota mensual noviembre",
      valor: 200000,
      fechaPago: "2024-11-25",
      estado: "Pago",
      entidadDePago: "Efectivo"
    }
  ]
  