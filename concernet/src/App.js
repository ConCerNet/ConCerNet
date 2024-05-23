import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from "./Pages/Login";
import Viviendas from "./Pages/Viviendas";
import ViviendaInfo from "./Pages/ViviendaInfo";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Viviendas" element={<Viviendas />} />
          <Route path="/viviendas/:id" element={<ViviendaInfo />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
