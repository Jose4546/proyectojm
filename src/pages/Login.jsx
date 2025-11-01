// src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    console.log("🔁 Enviando login:", { email, password: password ? "****" : "" });

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("📡 Status HTTP:", res.status, res.statusText);

    let data;
    try {
      data = await res.json();
      console.log("📥 Body JSON:", data);
    } catch (jsonErr) {
      console.error("❌ No se pudo parsear JSON:", jsonErr);
      const text = await res.text();
      console.error("📄 Cuerpo (texto):", text);
      alert("Respuesta inválida del servidor. Revisa la consola (Network).");
      return;
    }

    if (!res.ok) {
      console.warn("⚠️ Respuesta no OK:", data);
      alert(data.message || "Error al iniciar sesión");
      return;
    }

    localStorage.setItem("tipo_usuario", data.tipo_usuario);
    localStorage.setItem("email", data.email);

    console.log("✅ Login OK. tipo_usuario:", data.tipo_usuario);

    if (data.tipo_usuario === "Empleado") {
      console.log("➡️ Redirigiendo a /admin");
      navigate("/admin", { replace: true });
    } else if (data.tipo_usuario === "Cliente") {
      console.log("➡️ Redirigiendo a /cliente");
      navigate("/cliente", { replace: true });
    } else {
      console.log("➡️ Redirigiendo a /");
      navigate("/", { replace: true });
    }
  } catch (err) {
    console.error("❌ Error catch handleLogin:", err);
    alert("Error en el servidor. Intenta más tarde.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="login-container">
      <div className="login-box">
        {/* Panel Izquierdo */}
        <div className="login-left">
          <h1>
            JUGUETERÍA Y <br /> NOVEDADES
          </h1>
          <h2>MARTÍNEZ</h2>
          <div className="line" />
          <p>Sistema de Gestión Integral</p>
          <div className="circles">
            <span className="circle cyan" />
            <span className="circle yellow" />
            <span className="circle orange" />
          </div>
        </div>

        {/* Panel Derecho */}
        <div className="login-right">
          <h2>Iniciar Sesión</h2>
          <p>Introduce tus credenciales para continuar</p>

          <form onSubmit={handleLogin} className="login-form">
            <label>Correo Electrónico</label>
            <input
              type="email"
              placeholder="usuario@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Iniciando..." : "Entrar"}
            </button>

            <p className="register-link">
              ¿No tienes cuenta?{" "}
              <Link to="/register" className="highlight">
                Regístrate aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
