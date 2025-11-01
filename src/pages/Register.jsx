// Register.jsx
import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const strengthColor = (score) => {
  if (score >= 75) return "green";
  if (score >= 40) return "yellow";
  return "red";
};

const calcPasswordScore = (p) => {
  let score = 0;

  // length
  if (p.length >= 8) score += 25;
  else score += Math.max(0, (p.length / 8) * 25);

  // lowercase
  if (/[a-z]/.test(p)) score += 15;

  // uppercase
  if (/[A-Z]/.test(p)) score += 15;

  // number
  if (/\d/.test(p)) score += 20;

  // special char
  if (/[^A-Za-z0-9]/.test(p)) score += 25;

  // cap at 100
  return Math.min(100, Math.round(score));
};

const Register = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const score = useMemo(() => calcPasswordScore(password), [password]);
  const color = strengthColor(score);

  const rules = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
    match: password && password === password2,
  };

  const canSubmit = rules.length && rules.lowercase && rules.uppercase && rules.number && rules.special && rules.match && accepted && !submitting;

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!canSubmit) {
      alert("Asegúrate de cumplir todas las reglas de contraseña, aceptar términos y confirmar la contraseña.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, password }),
      });

      const text = await res.text();
      alert(text);
      if (res.ok) navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error al registrarse");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Panel Izquierdo */}
        <div className="register-left">
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
        <div className="register-right">
          <h2>Crear Cuenta</h2>
          <p>Completa tus datos para registrarte</p>

          <form onSubmit={handleRegister} className="register-form">
            <label>Nombre Completo</label>
            <input
              type="text"
              placeholder="Juan Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

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

            {/* Strength bar */}
            <div className="strength-row">
              <div className="strength-bar-bg">
                <div
                  className="strength-bar-fill"
                  style={{
                    width: `${score}%`,
                    backgroundColor: color,
                  }}
                />
              </div>
              <div className="strength-label" style={{ color }}>
                {score >= 75 ? "Fuerte" : score >= 40 ? "Media" : "Débil"}
              </div>
            </div>

            <label>Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="********"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />

            {/* Rules list */}
            <div className="password-rules">
              <p>La contraseña debe cumplir:</p>
              <ul>
                <li className={rules.length ? "ok" : ""}>
                  {rules.length ? "✔" : "✖"} Mínimo 8 caracteres
                </li>
                <li className={rules.lowercase ? "ok" : ""}>
                  {rules.lowercase ? "✔" : "✖"} Letra minúscula
                </li>
                <li className={rules.uppercase ? "ok" : ""}>
                  {rules.uppercase ? "✔" : "✖"} Letra mayúscula
                </li>
                <li className={rules.number ? "ok" : ""}>
                  {rules.number ? "✔" : "✖"} Número
                </li>
                <li className={rules.special ? "ok" : ""}>
                  {rules.special ? "✔" : "✖"} Carácter especial (ej. !@#$%)
                </li>
                <li className={rules.match ? "ok" : ""}>
                  {rules.match ? "✔" : "✖"} Las contraseñas coinciden
                </li>
              </ul>
            </div>

            <div className="checkbox-container">
              <input
                type="checkbox"
                id="terms"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                required
              />
              <label htmlFor="terms">
                Acepto los términos y condiciones y la política de privacidad
              </label>
            </div>

            <button type="submit" className="register-btn" disabled={!canSubmit}>
              {submitting ? "Registrando..." : "Crear Cuenta"}
            </button>

            <p className="login-link">
              ¿Ya tienes cuenta?{" "}
              <Link to="/login" className="highlight">
                Inicia sesión aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
