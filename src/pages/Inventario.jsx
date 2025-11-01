import React from "react";
import { useNavigate } from "react-router-dom";

function Inventario() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>📦 Inventario</h1>
        <div style={styles.headerButtons}>
          <button style={styles.button} onClick={() => navigate("/admin")}>
            ⬅ Volver al Panel
          </button>
          <button style={styles.button} onClick={() => navigate("/")}>
            🏠 Inicio
          </button>
        </div>
      </header>

      <div style={styles.content}>
        <button style={styles.addButton}>➕ Agregar producto</button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, nombre: "Muñeca Fashion", cat: "Juguetes", precio: "$350", stock: 20 },
              { id: 2, nombre: "Auto RC", cat: "Electrónicos", precio: "$420", stock: 15 },
              { id: 3, nombre: "Set de Bloques", cat: "Didácticos", precio: "$280", stock: 30 },
            ].map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.cat}</td>
                <td>{prod.precio}</td>
                <td>{prod.stock}</td>
                <td>
                  <button style={styles.smallButton}>✏️</button>
                  <button style={{ ...styles.smallButton, backgroundColor: "#ff4d4d" }}>🗑</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#F5F6FA",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    padding: "15px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    margin: 0,
    fontSize: "22px",
  },
  headerButtons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    backgroundColor: "#fff",
    color: "#F93B9A",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "600",
  },
  content: {
    padding: "25px",
  },
  addButton: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    fontWeight: "600",
    cursor: "pointer",
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
  smallButton: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "5px 8px",
    margin: "0 3px",
    cursor: "pointer",
  },
};

export default Inventario;
