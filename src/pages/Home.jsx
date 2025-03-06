import "../styles/Pages.css";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

const Home = () => {
  return (
    <div className="page-container home">
      <div className="content">
        <h1 style={{ color: "#f2b537" }}>Bienvenido a Solucions TI Express</h1>
        <h2 style={{ color: "#f2b537" }}>
          Soporte técnico rápido y eficiente.
        </h2>
      </div>

      {/* Sección de servicios */}
      <div className="container mt-5">
        <Services />
      </div>
      {/* Sección de Nosotros */}
      <div className="container mt-5">
        <About />
      </div>
      {/* Sección de contacto */}
      <div className="container mt-5">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
