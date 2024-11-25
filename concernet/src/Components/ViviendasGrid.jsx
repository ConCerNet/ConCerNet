import React, { useState } from "react"
import { Bed, Bath, Square, Pencil, Trash2, Plus } from "lucide-react"
import Modal from "./Modal"
import ViviendaForm from "./ViviendaForm"
import '../Styles/ViviendasGrid.css'

export default function ViviendasGrid({ viviendas, onAdd, onEdit, onDelete }) {
  const [modalMode, setModalMode] = useState(null)
  const [selectedVivienda, setSelectedVivienda] = useState(null)

  const handleEdit = vivienda => {
    setSelectedVivienda(vivienda)
    setModalMode("edit")
  }

  const handleSubmit = data => {
    if (modalMode === "edit" && selectedVivienda) {
      onEdit(selectedVivienda.id, data)
    } else {
      onAdd(data)
    }
    setModalMode(null)
  }

  return (
    <>
      <div className="mb-6 flex justify-end">
        <button
          onClick={() => setModalMode("create")}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
        >
          <Plus className="w-5 h-5 mr-2" />
          Nueva Vivienda
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {viviendas.map(vivienda => (
          <div
            key={vivienda.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <img
                src={vivienda.ImagenVivienda}
                alt={vivienda.direccion}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    (vivienda.estado === "En Venta" || vivienda.estado === "En Arriendo")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {vivienda.estado}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {vivienda.direccion}
              </h3>
              {/* <p className="text-gray-600 text-sm mb-4">{vivienda.direccion}</p> */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {vivienda.precio.toLocaleString("es-ES")}$
                </span>
              </div>
              <div className="flex justify-between text-gray-500 mb-4">
                <div className="flex items-center">
                  <Square className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vivienda.metrosCuadrados}m²</span>
                </div>
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vivienda.habitaciones}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{vivienda.baños}</span>
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-2 border-t">
                <button
                  onClick={() => handleEdit(vivienda)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded botonazul"
                >
                  <Pencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(vivienda.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded botonrojo"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalMode !== null}
        onClose={() => setModalMode(null)}
        title={`${modalMode === "create" ? "Crear" : "Editar"} Vivienda`}
      >
        <ViviendaForm
          vivienda={
            modalMode === "edit" ? selectedVivienda || undefined : undefined
          }
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  )
}
