import React from "react";
import { useNavigate } from "react-router-dom";

function Estadisticas() {
  const navigate = useNavigate();

  const irAlHistorial = () => {
    navigate("/historial-ventas");
  };

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>🧸 Juguetería Martínez</div>
        <div style={styles.navLinks}>
          <button style={styles.navButton}>Dashboard</button>
          <button style={styles.navButton}>Inventario</button>
          <button style={styles.navButton}>Estadísticas</button>
        </div>
      </nav>

      <div style={styles.content}>
        <h1 style={styles.title}>📊 Estadísticas Generales</h1>

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <h3>Ventas Totales</h3>
            <p>$120,500</p>
          </div>
          <div style={styles.card}>
            <h3>Clientes Nuevos</h3>
            <p>47</p>
          </div>
          <div style={styles.card}>
            <h3>Productos Más Vendidos</h3>
            <p>Peluches y Carros</p>
          </div>
        </div>

        {/* 🔽 Botón para ir al historial */}
        <button style={styles.historyButton} onClick={irAlHistorial}>
          Ver Historial de Ventas →
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#fce4ec",
    minHeight: "100vh",
  },
  navbar: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    display: "flex",
    gap: "15px",
  },
  navButton: {
    backgroundColor: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
  content: {
    padding: "40px",
    textAlign: "center",
  },
  title: {
    color: "#F93B9A",
    marginBottom: "30px",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
    padding: "20px",
    width: "220px",
  },
  historyButton: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Estadisticas;
