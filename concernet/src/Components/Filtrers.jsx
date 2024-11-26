import React from "react"
import '../Styles/Filters.css'
import { Search } from "lucide-react"

export default function Filters({ filters, onFilterChange, type }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {type === "usuarios" && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.nombres || ""}
                  onChange={e => onFilterChange("nombres", e.target.value)}
                  placeholder="Buscar por nombre..."
                  className="pl-10 w-fullfilter rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.email || ""}
                  onChange={e => onFilterChange("email", e.target.value)}
                  placeholder="Buscar por email..."
                  className="pl-10 w-fullfilter rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Direccion
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={filters.direccion || ""}
                  onChange={e => onFilterChange("direccion", e.target.value)}
                  placeholder="Buscar por direccion..."
                  className="pl-10 w-fullfilter rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </>
        )}
        {(type === "viviendas" || type === "pagos") && (
          <div className={type === "pagos" ? "md:col-span-3" : ""}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {type === "pagos" ? "Dirección de la vivienda" : "Dirección"}
            </label>
            <div className="relative">
              <input
                type="text"
                value={filters.direccion || ""}
                onChange={e => onFilterChange("direccion", e.target.value)}
                placeholder="Buscar por dirección..."
                className="pl-10 w-fullfilter rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
              />
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
