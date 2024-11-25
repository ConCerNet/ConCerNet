export const usuarios = [
    {
      tipoDocumento: "CC",
      noDocumento: 123456789,
      nombres: "Ana Carolina",
      apellidos: "Hernandez Diaz",
      direccion: "Mz I Casa 10B",
      telefono: 3045161578,
      email: "ana.hernandez@ejemplo.com",
      rol: "Arrendatario",
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
      rol: "Propietario",
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
      viviendaId: 1,
      fecha: "2024-03-01",
      monto: 150,
      concepto: "Cuota mensual marzo",
      estado: "pagado"
    },
    {
      id: 2,
      viviendaId: 2,
      fecha: "2024-03-01",
      monto: 200,
      concepto: "Cuota mensual marzo",
      estado: "pendiente"
    }
  ]
  