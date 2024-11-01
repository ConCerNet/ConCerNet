import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Menu_admin() {
    const [isDropdownUsuariosOpen, setIsDropdownUsuariosOpen] = useState(false);
    const [isDropdownViviendasOpen, setIsDropdownViviendasOpen] = useState(false);

    const toggleDropdownUsuarios = () => {
        setIsDropdownUsuariosOpen(!isDropdownUsuariosOpen);
    };

    const toggleDropdownViviendas = () => {
        setIsDropdownViviendasOpen(!isDropdownViviendasOpen);
    };

    return (
        <div>
            <div>
                <button onClick={toggleDropdownUsuarios} className="boton_usuarios">
                    Gestión de Usuarios
                </button>

                {isDropdownUsuariosOpen && (
                    <div className="dropdown-menu">
                        <Link to="/crear-usuario" className="dropdown-item">Crear Usuario</Link>
                        <Link to="/editar-usuario" className="dropdown-item">Editar Usuario</Link>
                        <Link to="/consultar-usuario" className="dropdown-item">Consultar Usuario</Link>
                        <Link to="/eliminar-usuario" className="dropdown-item">Eliminar Usuario</Link>
                    </div>
                )}
            </div>

            <br />

            <div>
                <button onClick={toggleDropdownViviendas} className="boton_viviendas">
                    Gestión de Viviendas
                </button>

                {isDropdownViviendasOpen && (
                    <div className="dropdown-menu">
                        <Link to="/nueva-vivienda" className="dropdown-item">Nueva Vivienda</Link>
                        <Link to="/editar-vivienda" className="dropdown-item">Editar Vivienda</Link>
                        <Link to="/viviendas" className="dropdown-item">Consultar Viviendas</Link>
                        <Link to="/eliminar-vivienda" className="dropdown-item">Eliminar Vivienda</Link>
                    </div>
                )}
            </div>

            <br />

            <div>
                <Link to="/Dashboard">
                    <button className="boton_Pagos">Pagos</button>
                </Link>
            </div>
        </div>
    );
}

export default Menu_admin;
