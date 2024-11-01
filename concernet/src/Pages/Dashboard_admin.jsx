//import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar_admin";
import Menu from "../Components/Menu_admin";
import "../Styles/Dashboard_admin.css";

const Dashboard_admin = () => {
  return (
    <div className="container">
      
      <NavBar />
      <div className="info_dashboard">
        <body>
          <br /><br /><br /><br />

          <h1>Hola Admin</h1>
          <h2>Panel de control</h2>

          <Menu/>

        </body>

      </div>
        
    </div>
  );
};
export default Dashboard_admin;
