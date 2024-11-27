import React, { useState } from "react"
import { Pencil, Trash2, UserPlus } from "lucide-react"
import Modal from "./Modal"
import UsuarioForm from "./UsuarioForm"
import '../Styles/UsuariosTable.css'

export default function UsuariosTable({ usuarios, onAdd, onEdit, onDelete }) {
  const [modalMode, setModalMode] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)

  const handleEdit = usuario => {
    setSelectedUser({ ...usuario})
    setModalMode("edit")
  }

  const handleSubmit = data => {
    if (modalMode === "edit" && selectedUser) {
      onEdit(selectedUser.id, {...data})
    } else {
      onAdd(data)
    }
    setModalMode(null)
  }

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Usuarios</h2>
          <button
            onClick={() => setModalMode("create")}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
          >
            <UserPlus className="w-5 h-5 mr-2"/>
            Nuevo Usuario
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Identificacion
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Direccion
              </th>
              {/* <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Rol
              </th> */}
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Telefono
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usuarios.map(usuario => (
              <tr key={usuario.noDocumento} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="ml-4">
                    {usuario.noDocumento}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <div className="ml-4">
                    {usuario.nombres}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.direccion}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.rol}
                </td> */}

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.telefono}
                </td>
                
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(usuario)}
                    className="text-blue-600 hover:text-blue-900 mr-3 botonazul"
                  >
                    <Pencil className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => onDelete(usuario.id)}
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
        title={`${modalMode === "create" ? "Crear" : "Editar"} Usuario`}
      >
        <UsuarioForm
          usuario={modalMode === "edit" ? selectedUser || undefined : undefined}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  )
}
