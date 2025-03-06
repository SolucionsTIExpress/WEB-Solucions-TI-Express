import { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";
import "../styles/Pages.css"; // Archivo CSS para estilos de páginas

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar datos a Firebase
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contactos"), formData);
      alert("Mensaje enviado con éxito");
      setFormData({ nombre: "", correo: "", mensaje: "" }); // Limpiar formulario
    } catch (error) {
      console.error("Error al enviar el mensaje: ", error);
      alert("Hubo un error al enviar el mensaje");
    }
  };

  return (
    <div className="contact">
      <div className="container mt-5">
        <h2 className="text-warning">Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="ejemplo@email.com"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Escribe tu mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
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
