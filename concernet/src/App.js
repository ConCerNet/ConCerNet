import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from './Pages/Login';
import Espacios from "./Pages/Espacios";
import Agendamiento from "./Pages/Agendamiento";


function App() {
  return (
    <AuthProvider>
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/Espacios" element={<Espacios />} />
        <Route path="/Agendamiento" element={<Agendamiento />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
