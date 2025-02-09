import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate de colocar tu logo en la carpeta assets

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "#25324b" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
