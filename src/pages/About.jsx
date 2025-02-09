import "../styles/Pages.css"; // Archivo CSS para estilos de páginas

const About = () => {
  return (
    <div className="page-container about">
      <div className="container mt-5">
        <h2 style={{ color: "#f2b537" }}>Sobre Nosotros</h2>
        <p className="text-white">
          Soluciones TI Express nació con el propósito de ofrecer soporte
          técnico confiable y eficiente.
        </p>
      </div>
    </div>
  );
};

export default About;
