import React from "react"
import '../Styles/PagoForm.css'

export default function PagoForm({ pago, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      direccion: formData.get("direccion"),
      titular: formData.get("titular"),
      descripcion: formData.get("descripcion"),
      valor: Number(formData.get("valor")),
      fechaPago: formData.get("fechaPago"),
      estado: formData.get("estado"),
      entidadDePago: formData.get("entidadDePago")
    })
  }

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
            defaultValue={pago?.direccion}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Titular
          </label>
          <input
            type="text"
            name="titular"
            defaultValue={pago?.titular}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
            disabled
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            name="descripcion"
            defaultValue={pago?.descripcion}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Valor ($)
          </label>
          <input
            type="number"
            name="valor"
            defaultValue={pago?.valor}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha de Pago
          </label>
          <input
            type="date"
            name="fechaPago"
            defaultValue={pago?.fechaPago}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado
          </label>
          <select
            name="estado"
            defaultValue={pago?.estado}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          >
            <option value="default" disabled selected>Seleccione un estado</option>
            <option value="Pago">Pago</option>
            <option value="Abono">Abono</option>
          </select>
        </div>
      </div>



      <div>
        <label className="block text-sm font-medium text-gray-700">
          Método de Pago
        </label>
        <select
          name="entidadDePago"
          defaultValue={pago?.entidadDePago}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
          required
        >
          <option value="default" disabled selected>Seleccione un método de pago</option>
          <option value="Efectivo">Efectivo</option>
          <option value="Transferencia">Transferencia</option>
          <option value="Mercado Pago">Mercado Pago</option>
        </select>
      </div>
      
      

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
        >
          {pago ? "Actualizar" : "Crear"} Pago
        </button>
      </div>
    </form>
  )
}
