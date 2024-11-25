import React from "react"
import '../Styles/UsuarioForm.css'

export default function UsuarioForm({ usuario, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    onSubmit({
      tipoDocumento: formData.get("tipoDocumento"),
      noDocumento: formData.get("noDocumento"),
      nombres: formData.get("nombres"),
      apellidos: formData.get("apellidos"),
      direccion: formData.get("direccion"),
      telefono: formData.get("telefono"),
      email: formData.get("email"),
      contraseña: formData.get("contraseña"),
      rol: formData.get("rol"),
      fechaNacimiento: formData.get("fechaNacimiento")
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
          <select
            name="TipoDocumento"
            defaultValue={usuario?.tipoDocumento}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          >
            <option value="default" disabled>Seleccione una opcion</option>
            <option value="Cedula">CC</option>
            <option value="CedulaExtrangeria">CE</option>
            <option value="Pasaporte">PP</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Numero de Documento
          </label>
          <input
            type="number"
            name="noDocumento"
            defaultValue={usuario?.noDocumento}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4"> 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombres
          </label>
          <input
            type="text"
            name="nombres"
            defaultValue={usuario?.nombres}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellidos
          </label>
          <input
            type="text"
            name="apellidos"
            defaultValue={usuario?.apellidos}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4"> 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Direccion
          </label>
          <input
            type="text"
            name="direccion"
            defaultValue={usuario?.direccion}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input
            type="number"
            name="telefono"
            defaultValue={usuario?.telefono}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4"> 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            defaultValue={usuario?.fechaNacimiento}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            defaultValue={usuario?.email}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Rol
          </label>
          <select
            name="rol"
            defaultValue={usuario?.rol}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          >
            <option value="default" disabled>Seleccione un rol</option>
            <option value="Propietario">Propietario</option>
            <option value="Arrendatario">Arrendatario</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            defaultValue={usuario?.contraseña}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>
      
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
        >
          {usuario ? "Actualizar" : "Crear"} Usuario
        </button>
      </div>
    </form>
  )
}
