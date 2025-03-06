import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Asegúrate de colocar tu logo en la carpeta assets
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{ backgroundColor: "#25324b" }}
      className="navbar navbar-expand-lg navbar-dark"
    >
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
