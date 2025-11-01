import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">🧸 Juguetería Martínez</div>
          <ul className="nav-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
          <div className="nav-buttons">
            <Link to="/login" className="btn-login">Iniciar Sesión</Link>
            <Link to="/register" className="btn-register">Registrarse</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="hero-content">
          <h1>Descubre la <span className="highlight">Magia</span> de Jugar</h1>
          <p>Los mejores juguetes para hacer sonreír a los más pequeños. Calidad, diversión y precios increíbles.</p>
          <div className="hero-buttons">
            <a href="#productos" className="btn-primary">Ver Productos</a>
            <a href="#categorias" className="btn-secondary">Explorar Categorías</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-decoration">
            <div className="hero-text">🎮</div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="categories" id="categorias">
        <h2 className="section-title">Nuestras Categorías</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon">🧸</div>
            <h3>Peluches</h3>
            <p>Los más suaves y adorables compañeros</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🎮</div>
            <h3>Videojuegos</h3>
            <p>Diversión digital para todas las edades</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🧩</div>
            <h3>Educativos</h3>
            <p>Aprende mientras te diviertes</p>
          </div>
          <div className="category-card">
            <div className="category-icon">🚗</div>
            <h3>Vehículos</h3>
            <p>Carritos, aviones y más</p>
          </div>
        </div>
      </section>

      {/* Productos */}
    <section class="products" id="productos">
        <h2 class="section-title">Productos Destacados</h2>
        <div class="products-grid">
            <div class="product-card">
                <div class="product-image">🧸</div>
                <div class="product-info">
                    <h3>Osito de Peluche</h3>
                    <p>Suave y adorable, perfecto para abrazar</p>
                    <div class="product-footer">
                        <span class="product-price">$299</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">🎮</div>
                <div class="product-info">
                    <h3>Consola Portátil</h3>
                    <p>Diversión en cualquier lugar</p>
                    <div class="product-footer">
                        <span class="product-price">$1,499</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">🧩</div>
                <div class="product-info">
                    <h3>Rompecabezas 3D</h3>
                    <p>Desafía tu mente y creatividad</p>
                    <div class="product-footer">
                        <span class="product-price">$399</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">🚗</div>
                <div class="product-info">
                    <h3>Auto a Control Remoto</h3>
                    <p>Velocidad y diversión garantizada</p>
                    <div class="product-footer">
                        <span class="product-price">$799</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">🎨</div>
                <div class="product-info">
                    <h3>Set de Arte</h3>
                    <p>Despierta el artista interior</p>
                    <div class="product-footer">
                        <span class="product-price">$549</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
            <div class="product-card">
                <div class="product-image">🎲</div>
                <div class="product-info">
                    <h3>Juego de Mesa</h3>
                    <p>Diversión para toda la familia</p>
                    <div class="product-footer">
                        <span class="product-price">$449</span>
                        <button class="btn-add-cart">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

<section class="testimonials">
        <h2 class="section-title">Lo Que Dicen Nuestros Clientes</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">M</div>
                    <div class="testimonial-info">
                        <h4>María González</h4>
                        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
                <p class="testimonial-text">"Excelente servicio y productos de calidad. Mis hijos están encantados con sus juguetes nuevos. ¡Totalmente recomendado!"</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">J</div>
                    <div class="testimonial-info">
                        <h4>Juan Pérez</h4>
                        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
                <p class="testimonial-text">"Gran variedad de productos y precios muy competitivos. La atención al cliente es excepcional. Volveré sin duda."</p>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-header">
                    <div class="testimonial-avatar">L</div>
                    <div class="testimonial-info">
                        <h4>Laura Rodríguez</h4>
                        <div class="testimonial-stars">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
                <p class="testimonial-text">"Encontré el regalo perfecto para el cumpleaños de mi sobrina. Entrega rápida y producto tal como se describe. ¡Perfectos!"</p>
            </div>
        </div>
    </section>
      {/* CTA */}
      <section className="cta">
        <div className="cta-container">
          <div className="cta-content">
            <h2>¿Listo para hacer feliz a alguien?</h2>
            <p>Regístrate ahora y obtén un 15% de descuento en tu primera compra</p>
            <Link to="/register" className="btn-cta">Registrarse Ahora</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
    <footer class="footer" id="contacto">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>🧸 Juguetería Martínez</h3>
                    <p>Haciendo sonreír a los niños desde 1995. Los mejores juguetes con la mejor calidad y atención personalizada.</p>
                    <div class="social-links">
                        <a href="#" class="social-link facebook">f</a>
                        <a href="#" class="social-link instagram">📷</a>
                        <a href="#" class="social-link whatsapp">💬</a>
                        <a href="#" class="social-link twitter">🐦</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <ul class="footer-links">
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#categorias">Categorías</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                        <li><a href="#">Sobre Nosotros</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Categorías</h3>
                    <ul class="footer-links">
                        <li><a href="#">Peluches</a></li>
                        <li><a href="#">Videojuegos</a></li>
                        <li><a href="#">Juguetes Educativos</a></li>
                        <li><a href="#">Vehículos</a></li>
                        <li><a href="#">Juegos de Mesa</a></li>
                        <li><a href="#">Arte y Manualidades</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h3>Contacto</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">📍</div>
                            <span>Av. Principal #123, Ciudad</span>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">📞</div>
                            <span>+52 (555) 123-4567</span>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">✉️</div>
                            <span>info@jugueteriamartinez.com</span>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">🕐</div>
                            <span>Lun - Sáb: 9:00 AM - 8:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Juguetería Martínez. Todos los derechos reservados.</p>
                <p>Diseñado con ❤️ para hacer sonreír a los niños</p>
            </div>
        </div>
    </footer>
    </>
  );
}

export default Home;
