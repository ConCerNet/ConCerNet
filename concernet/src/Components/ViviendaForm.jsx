import React from "react"
import '../Styles/ViviendaForm.css'
import ValidarVivienda from "../Validations/ValidarViviendas";

export default function ViviendaForm({ vivienda, onSubmit }) {
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   onSubmit({
  //     direccion: formData.get("direccion"),
  //     estado: formData.get("estado"),
  //     precio: Number(formData.get("precio")),
  //     metrosCuadrados: Number(formData.get("metrosCuadrados")),
  //     habitaciones: Number(formData.get("habitaciones")),
  //     baños: Number(formData.get("baños")),
  //     imagen: formData.get("imagen"),
  //   })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("imagen");

    const ImagenVivienda = file ? URL.createObjectURL(file) : null;
    
    const datosFormulario = {
      direccion: formData.get("direccion"),
      estado: formData.get("estado"),
      precio: Number(formData.get("precio")),
      metrosCuadrados: Number(formData.get("metrosCuadrados")),
      habitaciones: Number(formData.get("habitaciones")),
      baños: Number(formData.get("baños")),
      imagen: file, // Generar URL temporal
      ImagenVivienda
    };

    try {
      // Llama a la función de validación
      ValidarVivienda(datosFormulario);

      // Si pasa la validación, llama al callback onSubmit
      onSubmit(datosFormulario);
    } catch (error) {
      // Muestra el error al usuario
      alert(error.message);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Direccion
          </label>
          <input
            type="text"
            name="direccion"
            defaultValue={vivienda?.direccion}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            name="estado"
            defaultValue={vivienda?.estado}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          >
            <option value="default" disabled selected>Seleccione un estado</option>
            <option value="En Venta">En Venta</option>
            <option value="En Arriendo">En Arriendo</option>
            <option value="Vendida">Vendida</option>
            <option value="Arrendada">Arrendada</option>
          </select>
        </div>

      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Precio ($)
          </label>
          <input
            type="number"
            name="precio"
            defaultValue={vivienda?.precio}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Metros Cuadrados
          </label>
          <input
            type="number"
            name="metrosCuadrados"
            defaultValue={vivienda?.metrosCuadrados}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Habitaciones
          </label>
          <input
            type="number"
            name="habitaciones"
            defaultValue={vivienda?.habitaciones}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Baños
          </label>
          <input
            type="number"
            name="baños"
            defaultValue={vivienda?.baños}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Imagen de la vivienda
        </label>
        <input
          type="file"
          name="imagen"
          accept="image/png, image/jpeg, image/jpg, image/gif"
          className="inputImagen"
          // required
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
        >
          {vivienda ? "Actualizar" : "Crear"} Vivienda
        </button>
      </div>
    </form>
  )
}
