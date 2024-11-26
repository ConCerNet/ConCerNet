import React, { useState } from "react"
import TabNavigation from "../Components/TabNavigation"
import UsuariosTable from "../Components/UsuariosTable"
import ViviendasGrid from "../Components/ViviendasGrid"
import PagosTable from "../Components/PagosTable"
import Filters from "../Components/Filtrers"
import '../Styles/Dashboard_admin.css'
import concernet from "../Images/icoConcernet2.ico";
import {
  usuarios as initialUsuarios,
  viviendas as initialViviendas,
  pagos as initialPagos
} from "../Components/data"
import {Link} from "react-router-dom";
import { useAuth } from "../AuthProvider";

function DashboardAdmin() {
  const [activeTab, setActiveTab] = useState("usuarios")
  const [usuarios, setUsuarios] = useState(initialUsuarios)
  const [viviendas, setViviendas] = useState(initialViviendas)
  const [pagos, setPagos] = useState(initialPagos)
  const [filters, setFilters] = useState({
    nombres: "",
    email: "",
    direccion: ""
  })

  const auth = useAuth();

  // Filtrado
  const handleFilterChange = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const filteredUsuarios = usuarios.filter(usuario => {
    const nombreMatch = usuario.nombres
    ? usuario.nombres.toLowerCase().includes(filters.nombres?.toLowerCase() || "")
    : false;
    const emailMatch = usuario.email
    ? usuario.email.toLowerCase().includes(filters.email?.toLowerCase() || "")
    : false;
    const direccionMatch = usuario.direccion
    ? usuario.direccion.toLowerCase().includes(filters.direccion?.toLowerCase() || "")
    : false;
    return nombreMatch && emailMatch && direccionMatch
  })

  const filteredViviendas = viviendas.filter(vivienda =>
    vivienda.direccion.toLowerCase().includes(filters.direccion.toLowerCase())
  )

  // const filteredPagos = pagos.filter(pago => {
  //   const vivienda = viviendas.find(v => v.id === pago.viviendaId)
  //   return vivienda?.direccion
  //     .toLowerCase()
  //     .includes(filters.direccion.toLowerCase())
  // })

  const filteredPagos = pagos.filter(pago =>
    pago.direccion.toLowerCase().includes(filters.direccion.toLowerCase())
  )

  // Usuarios CRUD
  const handleAddUsuario = usuario => {
    const newUsuario = {
      ...usuario,
      id: usuarios.length + 1
    }
    setUsuarios([...usuarios, newUsuario])
  }

  const handleEditUsuario = (id, usuario) => {
    setUsuarios(usuarios.map(u => (u.id === id ? { ...usuario, id } : u)))
  }

  const handleDeleteUsuario = id => {
    setUsuarios(usuarios.filter(u => u.id !== id))
  }

  // Viviendas CRUD
  const handleAddVivienda = vivienda => {
    const newVivienda = {
      ...vivienda,
      id: viviendas.length + 1
    }
    setViviendas([...viviendas, newVivienda])
  }

  const handleEditVivienda = (id, vivienda) => {
    setViviendas(viviendas.map(v => (v.id === id ? { ...vivienda, id } : v)))
  }

  const handleDeleteVivienda = id => {
    setViviendas(viviendas.filter(v => v.id !== id))
  }

  // Pagos CRUD
  const handleAddPago = pago => {
    const newPago = {
      ...pago,
      id: pagos.length + 1
    }
    setPagos([...pagos, newPago])
  }

  const handleEditPago = (id, pago) => {
    setPagos(pagos.map(p => (p.id === id ? { ...pago, id } : p)))
  }

  const handleDeletePago = id => {
    setPagos(pagos.filter(p => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* <Building className="w-8 h-8 text-blue-600" /> */}
              <img
                    src={concernet}
                    className="w-8 h-8 text-blue-600 img"
                    alt="ConCerNet"
                  />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                <h1 className="titulo">ConcerNet</h1>
              </span>
            </div>
            <div className="login text-gray-900">
              <ul>
                <li>
                  {auth.user ? (
                    <Link to="/Login">Cerrar sesión</Link>
                  ) : (
                    <Link to="/Login">Iniciar sesión</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Panel de Administración
          </h1>
        </div>

        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <Filters
          filters={filters}
          onFilterChange={handleFilterChange}
          type={activeTab}
        />

        <div className="mt-6">
          {activeTab === "usuarios" ? (
            <UsuariosTable
              usuarios={filteredUsuarios}
              onAdd={handleAddUsuario}
              onEdit={handleEditUsuario}
              onDelete={handleDeleteUsuario}
            />
          ) : activeTab === "viviendas" ? (
            <ViviendasGrid
              viviendas={filteredViviendas}
              onAdd={handleAddVivienda}
              onEdit={handleEditVivienda}
              onDelete={handleDeleteVivienda}
            />
          ) : (
            <PagosTable
              pagos={filteredPagos}
              viviendas={viviendas}
              onAdd={handleAddPago}
              onEdit={handleEditPago}
              onDelete={handleDeletePago}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default DashboardAdmin