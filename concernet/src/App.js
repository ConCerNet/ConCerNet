import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Login from './Pages/Login';
import Management from "./Pages/Management";


function App() {
  return (
    <AuthProvider>
    <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route element={<PrivateRoute />}>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Management" element={<Management/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
