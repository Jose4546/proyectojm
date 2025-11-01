import React, { useEffect, useState } from "react";

const UsuariosAdmin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsuarios = async () => {
    try {
      const res = await fetch("http://localhost:5000/usuarios");
      const data = await res.json();
      setUsuarios(data);
    } catch (error) {
      console.error("❌ Error al cargar usuarios:", error);
      alert("Error al obtener usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const cambiarRol = async (id, nuevoRol) => {
    await fetch(`http://localhost:5000/usuarios/${id}/rol`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tipo_usuario: nuevoRol }),
    });
    fetchUsuarios();
  };

  const cambiarEstado = async (id, nuevoEstado) => {
    await fetch(`http://localhost:5000/usuarios/${id}/estado`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado: nuevoEstado }),
    });
    fetchUsuarios();
  };

  const eliminarUsuario = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este usuario?")) return;
    await fetch(`http://localhost:5000/usuarios/${id}`, { method: "DELETE" });
    fetchUsuarios();
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👥 Gestión de Usuarios</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Verificado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre}</td>
              <td>{u.email}</td>
              <td>
                <select
                  value={u.tipo_usuario}
                  onChange={(e) => cambiarRol(u.id, e.target.value)}
                >
                  <option value="Cliente">Cliente</option>
                  <option value="Empleado">Empleado</option>
                </select>
              </td>
              <td>
                <select
                  value={u.estado}
                  onChange={(e) => cambiarEstado(u.id, e.target.value)}
                >
                  <option value="Activo">Activo</option>
                  <option value="Bloqueado">Bloqueado</option>
                </select>
              </td>
              <td>{u.verificado ? "✅" : "❌"}</td>
              <td>
                <button
                  style={styles.deleteBtn}
                  onClick={() => eliminarUsuario(u.id)}
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: { marginTop: "20px" },
  title: { color: "#F93B9A", marginBottom: "15px" },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
  },
  deleteBtn: {
    background: "#ff4d4d",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default UsuariosAdmin;
