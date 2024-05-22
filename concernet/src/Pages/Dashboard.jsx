import NavBar from "../Components/NavBar";
import cancha from "../Images/Cancha.png";
import parque from "../Images/Parque.png";
import piscina from "../Images/Piscina.png";
import salonSocial from "../Images/SalonSocial.png";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


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
    return(
            <div className="container">
                <NavBar />
                <body>
                    <div className="home">

                        <div style={{backgroundColor: "white", width: "55vw", margin:"30px 350px"}}>
                                <div className="galeria">
                                <ImageGallery items={images}
                                    showNav={false}
                                    showPlayButton={false}
                                    slideDuration={900}
                                    showBullets={true}
                                    showThumbnails={true}
                                    slideInterval={3000}
                                    autoPlay={true}
                                >
                                </ImageGallery>

                                </div>
                            <br/>
                            <h3>Descripción</h3>
                            <p style={{textAlign: "justify"}}>
                                Como conjunto te ofrecemos los mejores espacios para que disfrutes con tus amigos y familiares, tendrás
                                acceso a la cancha multifuncional, a la piscina tanto de niños como de adultos, al salón social donde
                                podrás realizar cualquier evento que desees, de igual forma, tenemos el parque para que lleves a tus hijos,
                                hermanos e incluso mascota para que te puedas distraer y disfrutar de un gran momento.
                            </p>

                        </div>
                    
                        <h1>Todo sobre ConCerNet</h1>
                        {/*<img src={fachada} alt="ConCerNet" />*/}
                        <div className="descripcion">
                            <p className="parrafo">
                            Bienvenido a ConCerNet, tu nueva solución digital para gestionar y reservar espacios en conjuntos cerrados. ConCerNet está diseñado para facilitarte la vida, ofreciendo una plataforma intuitiva y eficiente para que puedas reservar tus espacios favoritos de manera rápida y sencilla.
                            </p>
                            <h2>
                                ¿Necesitas reservar la cancha de futbol para jugar con tus amigos?
                            </h2>
                            <p>
                            ConCerNet te lo hace fácil. Explora nuestra aplicación para descubrir todas las funcionalidades que hemos preparado para ti, desde la gestión de tus reservas hasta notificaciones en tiempo real sobre la disponibilidad de los espacios.
                            </p>
                            <p>
                            Estamos comprometidos a mejorar tu experiencia y hacer que la gestión de espacios sea tan cómoda y accesible como debería ser. ¡Descubre todas las posibilidades que ConCerNet tiene para ofrecer y empieza a disfrutar de una vida más organizada y sin complicaciones!
                            </p>
                            <h3>
                            Gracias por elegir ConCerNet. ¡Nos alegra tenerte con nosotros!
                            </h3>
                        </div>
                    </div>
                </body>
            </div>
    )
};
export default Dashboard;