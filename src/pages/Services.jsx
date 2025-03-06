import mantenimiento from "../assets/mantenimiento.png";
import software from "../assets/software.jpg";
import seguridad from "../assets/seguridad.jpg";
import "../styles/Pages.css";

const Services = () => {
  return (
    <div className="services mt-5">
      {" "}
      {/* Aquí agregamos margen arriba */}
      <div className="container mt-5">
        <h2 style={{ color: "#f2b537" }}>Nuestros Servicios</h2>
        <div className="row">
          {/* Servicio 1 */}
          <div className="col-md-4">
            <div
              className="card text-white"
              style={{ backgroundColor: "#31435e" }}
            >
              <img
                src={mantenimiento}
                className="card-img-top"
                alt="Mantenimiento"
              />
              <div className="card-body">
                <h5 className="card-title">Mantenimiento de Equipos</h5>
                <p className="card-text">
                  Revisión y optimización de equipos para un mejor rendimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 2 */}
          <div className="col-md-4">
            <div
              className="card text-white"
              style={{ backgroundColor: "#31435e" }}
            >
              <img src={software} className="card-img-top" alt="Software" />
              <div className="card-body">
                <h5 className="card-title">Instalación de Software</h5>
                <p className="card-text">
                  Configuramos y actualizamos software según tus necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 3 */}
          <div className="col-md-4">
            <div
              className="card text-white"
              style={{ backgroundColor: "#31435e" }}
            >
              <img src={seguridad} className="card-img-top" alt="Seguridad" />
              <div className="card-body">
                <h5 className="card-title">Seguridad Informática</h5>
                <p className="card-text">
                  Protección de datos y sistemas contra amenazas cibernéticas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
