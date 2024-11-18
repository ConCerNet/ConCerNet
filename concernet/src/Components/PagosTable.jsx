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

  const getViviendaDireccion = viviendaId => {
    return viviendas.find(v => v.id === viviendaId)?.direccion || "N/A"
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Pagos de Administración</h2>
          <button
            onClick={() => setModalMode("create")}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="w-5 h-5 mr-2" />
            Nuevo Pago
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Vivienda
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Monto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Concepto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pagos.map(pago => (
              <tr key={pago.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {getViviendaDireccion(pago.viviendaId)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.fecha}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {pago.monto.toLocaleString("es-ES")}€
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {pago.concepto}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      pago.estado === "pagado"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {pago.estado}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(pago)}
                    className="text-blue-600 hover:text-blue-900 mr-3"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(pago.id)}
                    className="text-red-600 hover:text-red-900"
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
