import React, { useState } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"
import Modal from "./Modal"
import PagoForm from "./PagoForm"
import '../Styles/PagosTable.css'

export default function PagosTable({
  pagos,
  viviendas,
  onAdd,
  onEdit,
  onDelete
}) {
  const [modalMode, setModalMode] = useState(null)
  const [selectedPago, setSelectedPago] = useState(null)

  const handleEdit = pago => {
    setSelectedPago(pago)
    setModalMode("edit")
  }

  const handleSubmit = data => {
    if (modalMode === "edit" && selectedPago) {
      onEdit(selectedPago.id, data)
    } else {
      onAdd(data)
    }
    setModalMode(null)
  }

  // const getViviendaDireccion = viviendaId => {
  //   return viviendas.find(v => v.id === viviendaId)?.direccion || "N/A"
  // }

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pagos de Administración</h2>
          <button
            onClick={() => setModalMode("create")}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Pago
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Manzana
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Casa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
                Titular
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Descripción
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Valor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Fecha de Pago
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Método de Pago
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pagos.map(pago => (
              <tr key={pago.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.direccion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.noCasa}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.titular}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.descripcion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.valor.toLocaleString("es-ES")}$
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.fechaPago}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.estado}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pago.entidadDePago}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(pago)}
                    className="text-blue-600 hover:text-blue-900 mr-3 botonazul"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(pago.id)}
                    className="text-red-600 hover:text-red-900 botonrojo"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={modalMode !== null}
        onClose={() => setModalMode(null)}
        title={`${modalMode === "create" ? "Crear" : "Editar"} Pago`}
      >
        <PagoForm
          pago={modalMode === "edit" ? selectedPago || undefined : undefined}
          viviendas={viviendas}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  )
}
