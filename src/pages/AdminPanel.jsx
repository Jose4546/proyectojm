import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsuariosAdmin from "../components/UsuariosAdmin";

function AdminPanel() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div style={styles.container}>
      {/* Header superior */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Panel de Administración</h1>
        <div style={styles.headerButtons}>
          <button
            style={styles.navButton}
            onClick={() => navigate("/")}
          >
            🏠 Inicio
          </button>
          <button
            style={styles.navButton}
            onClick={() => navigate("/login")}
          >
            🚪 Cerrar sesión
          </button>
        </div>
      </header>

      <div style={styles.content}>
        {/* Menú lateral */}
        <aside style={styles.sidebar}>
          <h2 style={styles.sidebarTitle}>Menú principal</h2>

          {/* Botones directos */}
          <button
            style={styles.sideButton}
            onClick={() => navigate("/inventario")}
          >
            📦 Inventario
          </button>
          <button
            style={styles.sideButton}
            onClick={() => navigate("/estadisticas")}
          >
            📊 Estadísticas
          </button>

          <h3 style={{ ...styles.sidebarTitle, marginTop: "20px" }}>
            Categorías
          </h3>

          {["Juguetes", "Didácticos", "Electrónicos", "Ofertas"].map(
            (category) => (
              <div key={category} style={styles.categorySection}>
                <button
                  style={{
                    ...styles.categoryButton,
                    backgroundColor:
                      activeCategory === category ? "#F93B9A" : "#fff",
                    color: activeCategory === category ? "#fff" : "#F93B9A",
                  }}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </button>

                {activeCategory === category && (
                  <div style={styles.dropdown}>
                    <p style={styles.item}>Ver productos</p>
                    <p style={styles.item}>Agregar nuevo</p>
                    <p style={styles.item}>Editar / Eliminar</p>
                  </div>
                )}
              </div>
            )
          )}
        </aside>

        {/* Contenido principal */}
        <main style={styles.main}>
          <h2 style={styles.sectionTitle}>Productos más vendidos</h2>
          <div style={styles.productsGrid}>
            {[
              { name: "Muñeca Fashion", price: "$350" },
              { name: "Auto Control Remoto", price: "$420" },
              { name: "Set de Bloques", price: "$280" },
              { name: "Rompecabezas 3D", price: "$320" },
              { name: "Pelota Saltarina", price: "$150" },
              { name: "Carrito de Bomberos", price: "$390" },
            ].map((product, index) => (
              <div key={index} style={styles.productCard}>
                <div style={styles.productImage}></div>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productPrice}>{product.price}</p>
              </div>
            ))}
          </div>
          <UsuariosAdmin />
        </main>
        

      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#F5F6FA",
  },
  header: {
    backgroundColor: "#F93B9A",
    color: "#fff",
    padding: "15px 25px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "600",
  },
  headerButtons: {
    display: "flex",
    gap: "10px",
  },
  navButton: {
    backgroundColor: "#fff",
    color: "#F93B9A",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  content: {
    display: "flex",
    flex: 1,
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#fff",
    borderRight: "1px solid #eee",
    padding: "20px",
    boxShadow: "2px 0 5px rgba(0,0,0,0.05)",
  },
  sidebarTitle: {
    color: "#F93B9A",
    fontSize: "18px",
    marginBottom: "15px",
  },
  sideButton: {
    width: "100%",
    padding: "10px",
    border: "1px solid #F93B9A",
    borderRadius: "8px",
    backgroundColor: "#fff",
    color: "#F93B9A",
    fontSize: "15px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
  categorySection: {
    marginBottom: "10px",
  },
  categoryButton: {
    width: "100%",
    padding: "10px",
    border: "1px solid #F93B9A",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  dropdown: {
    backgroundColor: "#FFF0F6",
    marginTop: "5px",
    borderRadius: "6px",
    padding: "8px 12px",
  },
  item: {
    margin: "6px 0",
    fontSize: "14px",
    color: "#444",
    cursor: "pointer",
  },
  main: {
    flex: 1,
    padding: "25px",
  },
  sectionTitle: {
    color: "#F93B9A",
    fontSize: "20px",
    marginBottom: "20px",
  },
  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },
  productImage: {
    height: "100px",
    backgroundColor: "#FDE1EB",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  productName: {
    color: "#333",
    fontSize: "15px",
    marginBottom: "5px",
  },
  productPrice: {
    color: "#F93B9A",
    fontWeight: "600",
  },
};

export default AdminPanel;
