import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from "./Pages/Login";
import Espacios from "./Pages/Espacios";
import Agendamiento from "./Pages/Agendamiento";
import Management from "./Pages/Management";
import Viviendas from "./Pages/Viviendas";
import ViviendaInfo from "./Pages/ViviendaInfo";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Espacios/:id" element={<Agendamiento />} />
          <Route path="/Management" element={<Management />} />
        </Route>
        <Route path="/Espacios" element={<Espacios />} />
        <Route path="/Viviendas" element={<Viviendas />} />
        <Route path="/viviendas/:id" element={<ViviendaInfo />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
