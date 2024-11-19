import React from "react"
import '../Styles/UsuarioForm.css'

export default function UsuarioForm({ usuario, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      nombre: formData.get("nombre"),
      email: formData.get("email"),
      rol: formData.get("rol"),
      fechaRegistro: new Date().toISOString().split("T")[0],
      avatar: formData.get("avatar")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="nombre"
          defaultValue={usuario?.nombre}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          defaultValue={usuario?.email}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Rol</label>
        <select
          name="rol"
          defaultValue={usuario?.rol}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        >
          <option value="usuario">Usuario</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          URL del Avatar
        </label>
        <input
          type="url"
          name="avatar"
          defaultValue={usuario?.avatar}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {usuario ? "Actualizar" : "Crear"} Usuario
        </button>
      </div>
    </form>
  )
}
