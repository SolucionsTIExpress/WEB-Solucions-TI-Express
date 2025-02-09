import mantenimiento from "../assets/mantenimiento.png";
import software from "../assets/software.jpg";
import seguridad from "../assets/seguridad.jpg";
import "../styles/Pages.css"; // Archivo CSS para estilos de páginas

const Services = () => {
  return (
    <div className="page-container services">
      <div className="container mt-5">
        <h2 style={{ color: "#f2b537" }}>Nuestros Servicios</h2>
        <div className="row">
          {/* Servicio 1 - Mantenimiento */}
          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: "#31435e", color: "white" }}
            >
              <img
                src={mantenimiento}
                className="card-img-top"
                alt="Mantenimiento de Equipos"
              />
              <div className="card-body">
                <h5 className="card-title">Mantenimiento de Equipos</h5>
                <p className="card-text">
                  Revisión y optimización de equipos para un mejor rendimiento.
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 2 - Instalación de Software */}
          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: "#31435e", color: "white" }}
            >
              <img
                src={software}
                className="card-img-top"
                alt="Instalación de Software"
              />
              <div className="card-body">
                <h5 className="card-title">Instalación de Software</h5>
                <p className="card-text">
                  Configuramos y actualizamos software según tus necesidades.
                </p>
              </div>
            </div>
          </div>

          {/* Servicio 3 - Seguridad Informática */}
          <div className="col-md-4">
            <div
              className="card"
              style={{ backgroundColor: "#31435e", color: "white" }}
            >
              <img
                src={seguridad}
                className="card-img-top"
                alt="Seguridad Informática"
              />
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
