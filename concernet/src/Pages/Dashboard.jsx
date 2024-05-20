import NavBar from "../Components/NavBar";
import fachada from "../Images/fachada.jpg";


const Dashboard = () => {
    return(

            <div className="container">
                <NavBar />
                <body>
                    <div className="home">
                    <h1>Todo sobre ConCerNet</h1>
                        <img src={fachada} alt="ConCerNet" />
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