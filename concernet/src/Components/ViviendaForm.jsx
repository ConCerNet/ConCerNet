import React from "react"
import '../Styles/ViviendaForm.css'
export default function ViviendaForm({ vivienda, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      titulo: formData.get("titulo"),
      direccion: formData.get("direccion"),
      precio: Number(formData.get("precio")),
      metros: Number(formData.get("metros")),
      habitaciones: Number(formData.get("habitaciones")),
      baños: Number(formData.get("baños")),
      imagen: formData.get("imagen"),
      estado: formData.get("estado")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          type="text"
          name="titulo"
          defaultValue={vivienda?.titulo}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Dirección
        </label>
        <input
          type="text"
          name="direccion"
          defaultValue={vivienda?.direccion}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="disponible">Disponible</option>
            <option value="reservada">Reservada</option>
            <option value="vendida">Vendida</option>
          </select>
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          URL de la Imagen
        </label>
        <input
          type="url"
          name="imagen"
          defaultValue={vivienda?.imagen}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {vivienda ? "Actualizar" : "Crear"} Vivienda
        </button>
      </div>
    </form>
  )
}
