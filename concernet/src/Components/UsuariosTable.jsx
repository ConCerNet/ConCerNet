import React, { useEffect, useState } from "react";
import axios from "axios"; // Asegúrate de tener axios instalado
import { Pencil, Trash2, UserPlus } from "lucide-react";
import Modal from "./Modal";
import UsuarioForm from "./UsuarioForm";
import "../Styles/UsuariosTable.css";

export default function UsuariosTable() {
  const [usuarios, setUsuarios] = useState([]);
  const [modalMode, setModalMode] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const listarUsuarios = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/usuarios");
      const data = response.data;
      setUsuarios(data.usuarios || []);
    } catch (err) {
      console.error("Error al cargar usuarios:", err);
      setError("No se pudo cargar la lista de usuarios.");
    } finally {
      setLoading(false); // Detenemos el estado de carga
    }
  };

  // Efecto para cargar los usuarios al montar el componente
  useEffect(() => {
    listarUsuarios();
  }, []);

  // Manejar el envío del formulario de creación/edición
  const handleSubmit = (data) => {
    if (modalMode === "edit" && selectedUser) {
      // Editar usuario
      const updatedUsuarios = usuarios.map((usuario) =>
        usuario.idusuario === selectedUser.idusuario ? { ...usuario, ...data } : usuario
      );
      setUsuarios(updatedUsuarios);
    } else {
      // Crear usuario (Simulación en frontend; podrías hacer una llamada POST a tu API aquí)
      setUsuarios([...usuarios, { idusuario: usuarios.length + 1, ...data }]);
    }
    setModalMode(null);
  };

  // Manejar la eliminación de un usuario
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/usuarios/${id}`);
      setUsuarios(usuarios.filter((usuario) => usuario.idusuario !== id));
    } catch (err) {
      console.error("Error al eliminar usuario:", err);
      setError("No se pudo eliminar el usuario.");
    }
  };

  // Manejar la edición de un usuario
  const handleEdit = (usuario) => {
    setSelectedUser({ ...usuario });
    setModalMode("edit");
  };

  if (loading) return <p>Cargando usuarios...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <>
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Usuarios</h2>
          <button
            onClick={() => setModalMode("create")}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 button"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Nuevo Usuario
          </button>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                IDENTIFICACION
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                USUARIO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                EMAIL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                MANZANA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                NUMERO DE CASA
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                TELÉFONO
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                ACCIONES
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {usuarios.map((usuario) => (
              <tr key={usuario.idusuario} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.nodocumento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.nombre + " " + usuario.apellido}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.correo || "No registrado"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.direccion}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.numerovivienda}
                </td>
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
                    onClick={() => handleDelete(usuario.idusuario)}
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
  );
}
