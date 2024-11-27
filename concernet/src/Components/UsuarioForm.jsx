import { useState } from "react"
import '../Styles/UsuarioForm.css'
import ValidarUsuarios from "../Validations/ValidarUsuarios";
import axios from "axios";

const UsuarioForm = ({ usuario, onSubmit }) => {
  const [tipodocumento, setTipoDocumento] = useState('');
  const [nodocumento, setNoDocumento] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechanacimiento, setFechaNacimiento] = useState('');
  const [correo, setCorreo] = useState('');
  const [numerovivienda, setNumeroVivienda] = useState('');
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   onSubmit({
  //     tipoDocumento: formData.get("tipoDocumento"),
  //     noDocumento: formData.get("noDocumento"),
  //     nombres: formData.get("nombres"),
  //     apellidos: formData.get("apellidos"),
  //     direccion: formData.get("direccion"),
  //     telefono: formData.get("telefono"),
  //     email: formData.get("email"),
  //     contraseña: formData.get("contraseña"),
  //     rol: formData.get("rol"),
  //     fechaNacimiento: formData.get("fechaNacimiento")
  //   })
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/usuarios/registrar', {
        tipodocumento,
        nodocumento,
        nombre,
        apellido,
        contraseña,
        direccion,
        telefono,
        fechanacimiento,
        correo,
        numerovivienda,
        idrol: 2,
      });
      alert(response.data.mensaje);
      setTipoDocumento('');
      setNoDocumento('');
      setNombre('');
      setApellido('');
      setContraseña('');
      setDireccion('');
      setTelefono('');
      setFechaNacimiento('');
      setCorreo('');
      setNumeroVivienda('');
    } catch (error) {
      console.error('Error al crear nuevo usuario', error);
    }
  }

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log('hola');
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);

  //   const datosFormulario = {
  //     tipoDocumento: formData.get("tipoDocumento"),
  //     noDocumento: formData.get("noDocumento"),
  //     nombres: formData.get("nombres"),
  //     apellidos: formData.get("apellidos"),
  //     direccion: formData.get("direccion"),
  //     noCasa: formData.get("noCasa"),
  //     telefono: formData.get("telefono"),
  //     email: formData.get("email"),
  //     contraseña: formData.get("contraseña"),
  //     fechaNacimiento: formData.get("fechaNacimiento"),
  //     // rol: formData.get("rol"),
  //   };

  //   try {
  //     // Llama a la función de validación
  //     ValidarUsuarios(datosFormulario);

  //     // Si pasa la validación, llama al callback onSubmit
  //     onSubmit(datosFormulario);
  //   } catch (error) {
  //     // Muestra el error al usuario
  //     alert(error.message);
  //   }
  // };

  return (
    <form onSubmit={onSubmit ? handleSubmit: handleSubmit2} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
          <select
            name="tipoDocumento"
            value={tipodocumento}
            onChange={(e) => setTipoDocumento(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 select"
            required
          >
            <option value="" disabled>Seleccione una opcion</option>
            <option value="CC">CC</option>
            <option value="CE">CE</option>
            <option value="PP">PP</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Numero de Documento
          </label>
          <input
            type="number"
            name="noDocumento"
            value={nodocumento}
            onChange={(e) => setNoDocumento(e.target.value)}
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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4"> 
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Manzana
          </label>
          <input
            type="text"
            name="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Numero de la Casa
          </label>
          <input
            type="text"
            name="noCasa"
            value={numerovivienda}
            onChange={(e) => setNumeroVivienda(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
      </div>
      
      <div className="grid grid-cols-2 gap-4"> 

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input
            type="number"
            name="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            name="fechaNacimiento"
            value={fechanacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-4">
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
            <option value="default" disabled selected>Seleccione un rol</option>
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
      </div> */}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo Electronico
          </label>
          <input
            type="email"
            name="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 input"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
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
export default UsuarioForm;