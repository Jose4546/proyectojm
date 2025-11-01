// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AdminPanel from "./pages/AdminPanel";
import Cliente from "./pages/Cliente";
import Inventario from "./pages/Inventario";
import Estadisticas from "./pages/Estadisticas";
import HistorialVentas from "./pages/HistorialVentas";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🏠 Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* 👨‍💼 Rutas para empleado */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/inventario" element={<Inventario />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/historial-ventas" element={<HistorialVentas />} />

        {/* 👤 Ruta para cliente */}
        <Route path="/cliente" element={<Cliente />} />

        {/* 🚫 Ruta por defecto */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

