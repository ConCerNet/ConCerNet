import NavBar from "../Components/NavBar";
import cancha from "../Images/Cancha.png";
import parque from "../Images/Parque.png";
import piscina from "../Images/Piscina.png";
import salonSocial from "../Images/SalonSocial.png";
import margaritas from "../Images/LasMargaritas.png";
import salaComedor from "../Images/Sala-comedor.png";
import Cocina from "../Images/Cocina.png";
import Balcon from "../Images/Balcon.png";
import Baños from "../Images/Baños.png";
import Habitaciones from "../Images/Habitacion.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../Styles/Dashboard.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

const images = [
  {
    original: cancha,
    thumbnail: cancha,
  },
  {
    original: parque,
    thumbnail: parque,
  },
  {
    original: piscina,
    thumbnail: piscina,
  },
  {
    original: salonSocial,
    thumbnail: salonSocial,
  },
];

const Dashboard = () => {
  return (
    <div className="container">
      <NavBar />
      <body>
        <div className="home">
          <br />
          <br />
          <br />
          <br />
          <div
            className="galeria"
            style={{
              backgroundColor: "white",
              width: "63vw",
              margin: "20px 280px",
            }}
          >
            <div className="galeria">
              <ImageGallery
                items={images}
                showNav={true}
                showPlayButton={false}
                slideDuration={900}
                showBullets={true}
                showThumbnails={false}
                slideInterval={3000}
                autoPlay={true}
              ></ImageGallery>
            </div>
            <br />
          </div>

          <div className="descripcion">
            <img src={margaritas} alt="ConCerNet" className="margaritas" />

            <h2 className="titulo1">Descripción</h2>

            <p className="parrafo1">
              Estamos ubicados en el norte de la ciudad, la zona de mayor
              valorización y desarrollo, y como conjunto te ofrecemos los
              mejores espacios para que disfrutes con tus amigos y familiares,
              contamos con piscina, cancha multifunciona, salon de eventos y
              parque tematico de juegos infantiles.
            </p>
            <p className="parrafo1">
              Tendrás acceso a la cancha multifuncional, a la piscina tanto de
              niños como de adultos, al salón social donde podrás realizar
              cualquier evento que desees, de igual forma, tenemos el parque
              para que lleves a tus hijos, hermanos e incluso mascota para que
              te puedas distraer y disfrutar de un gran momento.
            </p>
          </div>

          <br />
          <br />

          <div className="ubicacion">
            <h2 className="titulo2">Ubicación</h2>

            <br />
            <br />
            <br />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.688596250973!2d-73.2690308254866!3d10.446266765197901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab940b7778a9f%3A0xb91ed502a4799a39!2sConjunto%20Cerrado%20La%20Fontana!5e0!3m2!1ses!2sco!4v1716419540997!5m2!1ses!2sco"
              width="600"
              height="450"
              style={{ border: "0", margin: "10px 120px 20px ", float: "left" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>

            <div className="casas">
              <br />
              <p className="parrafo2"> Nuestras casas contienen:</p>
              <br />
              <div className="comedor">
                <div style={{ float: "left" }}>
                  <img
                    src={salaComedor}
                    className="salaComedor"
                    alt="ConCerNet"
                  />
                </div>

                <div style={{ float: "left", margin: "16px" }}>
                  Sala - Comedor
                </div>

                <div style={{ float: "right", margin: "16px 10px" }}>1</div>
              </div>
              <br /> <br /> <br />
              <div className="Cocina">
                <div style={{ float: "left" }}>
                  <img src={Cocina} className="cocina" alt="ConCerNet" />
                </div>

                <div style={{ float: "left", margin: "16px" }}>Cocina</div>

                <div style={{ float: "right", margin: "16px 10px" }}>1</div>
              </div>
              <br /> <br /> <br />
              <div className="Balcon">
                <div style={{ float: "left" }}>
                  <img src={Balcon} className="balcon" alt="ConCerNet" />
                </div>

                <div style={{ float: "left", margin: "16px" }}>Balcon</div>

                <div style={{ float: "right", margin: "16px 10px" }}>1</div>
              </div>
              <br /> <br /> <br />
              <div className="Baños">
                <div style={{ float: "left" }}>
                  <img src={Baños} className="baños" alt="ConCerNet" />
                </div>

                <div style={{ float: "left", margin: "16px" }}>Baños</div>

                <div style={{ float: "right", margin: "16px 10px" }}>2</div>
              </div>
              <br /> <br /> <br />
              <div className="Habitaciones">
                <div style={{ float: "left" }}>
                  <img
                    src={Habitaciones}
                    className="habitaciones"
                    alt="ConCerNet"
                  />
                </div>

                <div style={{ float: "left", margin: "16px" }}>
                  Habitaciones
                </div>

                <div style={{ float: "right", margin: "16px 10px" }}>3</div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <li className="link">
                Haga click{" "}
                <Link className="direccion" to="/Viviendas">
                  Aquí
                </Link>{" "}
                para más información sobre las viviendas
              </li>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};
export default Dashboard;
