import imagenV1 from "./Images/vivienda1.jpg";
import imagenV2 from "./Images/vivienda2.jpg";
import imagenV3 from "./Images/vivienda3.jpg";
import imagenV4 from "./Images/vivienda4.jpg";
import imagenV5 from "./Images/vivienda5.jpg";
import imagenV6 from "./Images/vivienda6.jpg";
const viviendas = [
  {
    id: 1,
    direccion: "Manzana A Casa 1",
    precio: "$250,000,000",
    habitaciones: 3,
    enVenta: true,
    imagen: imagenV1,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
  {
    id: 3,
    direccion: "Manzana B Casa 3",
    precio: "$150,000,000",
    habitaciones: 4,
    enVenta: true,
    imagen: imagenV2,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
  {
    id: 5,
    direccion: "Manzana C Casa 2",
    precio: "$300,000,000",
    habitaciones: 5,
    enVenta: true,
    imagen: imagenV3,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
  {
    id: 2,
    direccion: "Manzana C Casa 1",
    precio: "$1,200,000/mes",
    habitaciones: 2,
    enVenta: false,
    imagen: imagenV4,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
  {
    id: 4,
    direccion: "Manzana B Casa 2",
    precio: "$900,000/mes",
    habitaciones: 3,
    enVenta: false,
    imagen: imagenV5,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
  {
    id: 6,
    direccion: "Manzana C Casa 5",
    precio: "$1,500,000/mes",
    habitaciones: 4,
    enVenta: false,
    imagen: imagenV6,
    descripcion: "Una hermosa casa en una calle tranquila.",
  },
];

export default viviendas;
