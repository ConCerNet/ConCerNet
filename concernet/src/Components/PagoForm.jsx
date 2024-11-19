import React from "react"
import '../Styles/PagoForm.css'

export default function PagoForm({ pago, viviendas, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      viviendaId: Number(formData.get("viviendaId")),
      fecha: formData.get("fecha"),
      monto: Number(formData.get("monto")),
      concepto: formData.get("concepto"),
      estado: formData.get("estado")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Vivienda
        </label>
        <select
          name="viviendaId"
          defaultValue={pago?.viviendaId}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="">Seleccionar vivienda</option>
          {viviendas.map(vivienda => (
            <option key={vivienda.id} value={vivienda.id}>
              {vivienda.direccion}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Fecha</label>
        <input
          type="date"
          name="fecha"
          defaultValue={pago?.fecha}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Monto ($)
        </label>
        <input
          type="number"
          name="monto"
          defaultValue={pago?.monto}
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Concepto
        </label>
        <input
          type="text"
          name="concepto"
          defaultValue={pago?.concepto}
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
          defaultValue={pago?.estado}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="pendiente">Pendiente</option>
          <option value="pagado">Pagado</option>
        </select>
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {pago ? "Actualizar" : "Crear"} Pago
        </button>
      </div>
    </form>
  )
}
