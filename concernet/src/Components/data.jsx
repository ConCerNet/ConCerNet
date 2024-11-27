export const usuarios = [
    {
      tipoDocumento: "CC",
      noDocumento: 123456789,
      nombres: "Ana Carolina",
      apellidos: "Hernandez Diaz",
      direccion: "Mz I Casa 10B",
      telefono: 3045161578,
      email: "ana.hernandez@ejemplo.com",
      // rol: "Arrendatario",
      contraseña: "anahernandez123",
      fechaNacimiento: "2000-10-10"
    },
    {
      tipoDocumento: "CC",
      noDocumento: 987654321,
      nombres: "Ana Carolina",
      apellidos: "Hernandez Diaz",
      direccion: "Mz I Casa 10B",
      telefono: 3045161578,
      email: "ana.hernandez@ejemplo.com",
      // rol: "Propietario",
      contraseña: "anahernandez123",
      fechaNacimiento: "2002-12-16"
    }
  ]
  
  export const viviendas = [
    {
      id: 1,
      direccion: "Calle Mayor 123, Madrid",
      estado: "En Venta",
      precio: 450000,
      metrosCuadrados: 120,
      habitaciones: 3,
      baños: 2,
      ImagenVivienda:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500",
    },
    {
      id: 2,
      direccion: "Avenida del Parque 45, Barcelona",
      estado: "Arrendada",
      precio: 680000,
      metrosCuadrados: 250,
      habitaciones: 4,
      baños: 3,
      ImagenVivienda:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500",
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
  