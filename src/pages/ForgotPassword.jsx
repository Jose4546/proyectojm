import React from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Recuperar Contraseña</h2>
      <p style={styles.subtitle}>
        Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
      </p>

      <form style={styles.form}>
        <input
          type="email"
          placeholder="Correo electrónico"
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Enviar enlace
        </button>
      </form>

      <div style={styles.links}>
        <Link to="/login" style={styles.link}>Volver al inicio de sesión</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#fce4ec",
    fontFamily: "Poppins, sans-serif",
  },
  title: {
    marginBottom: "10px",
    color: "#F93B9A",
  },
  subtitle: {
    marginBottom: "20px",
    width: "80%",
    textAlign: "center",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  },
  input: {
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
  links: {
    marginTop: "15px",
  },
  link: {
    color: "#F93B9A",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default ForgotPassword;
