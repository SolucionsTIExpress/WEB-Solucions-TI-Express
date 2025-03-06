import "../styles/Pages.css"; // Archivo CSS para estilos de páginas

const Contact = () => {
  return (
    <div className="contact">
      <div className="container mt-5">
        <h2 className="text-warning">Contáctanos</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@email.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Escribe tu mensaje"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-warning">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
