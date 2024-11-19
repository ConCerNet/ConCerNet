import React from "react"
import '../Styles/TabNavigation.css'
import { Users, Home, CreditCard } from "lucide-react"

export default function TabNavigation({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-4 mb-6">
      <button
        onClick={() => setActiveTab("usuarios")}
        className={`flex items-center px-4 py-2 rounded-lg button ${
          activeTab === "usuarios"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <Users className="w-5 h-5 mr-2" />
        Usuarios
      </button>
      <button
        onClick={() => setActiveTab("viviendas")}
        className={`flex items-center px-4 py-2 rounded-lg button ${
          activeTab === "viviendas"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <Home className="w-5 h-5 mr-2" />
        Viviendas
      </button>
      <button
        onClick={() => setActiveTab("pagos")}
        className={`flex items-center px-4 py-2 rounded-lg button ${
          activeTab === "pagos"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        <CreditCard className="w-5 h-5 mr-2" />
        Pagos
      </button>
    </div>
  )
}
