import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CarCard from './components/CarCard';
import CarDetail from './components/CarDetail';
import CustomCursor from './components/CustomCursor';
import { carsData } from './data/carsData';

function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const openDetail = (car) => {
    setSelectedCar(car);
  };

  const closeDetail = () => {
    setSelectedCar(null);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`✅ Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      alert(`✅ Subscribed! Check your inbox: ${newsletterEmail}`);
      setNewsletterEmail('');
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="gradient-bg"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-text">
            <span className="badge">⚡ 2024 COLLECTION ⚡</span>
            <h1>Unleash The<br/><span className="gradient">Beast Within</span></h1>
            <p>Experience raw power, cutting-edge design, and unparalleled engineering. The future of automotive excellence is here.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('cars')}>
                Explore Cars <i className="fas fa-arrow-right"></i>
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact Us <i className="fas fa-headset"></i>
              </button>
            </div>
          </div>
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-tag">ABOUT VELOCITY</span>
              <h2>Redefining <span className="gradient">Automotive Excellence</span></h2>
              <p>Founded in 2010, Velocity has become a global leader in luxury and performance vehicles. We don't just sell cars; we deliver dreams on wheels.</p>
              <p>Our team of experts handpicks only the finest hypercars, ensuring every vehicle meets our rigorous standards of quality, performance, and exclusivity.</p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Exotic Models</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format" alt="Luxury car showroom" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Velocity?</h2>
            <p>Experience the difference with our premium services</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-tachometer-alt"></i></div>
              <h3>Unmatched Performance</h3>
              <p>Every car is tested to deliver maximum power, speed, and precision handling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Premium Warranty</h3>
              <p>5-year comprehensive warranty on all vehicles with 24/7 roadside assistance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-headset"></i></div>
              <h3>24/7 Support</h3>
              <p>Dedicated concierge service available anytime, anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Section */}
      <section className="cars-section" id="cars">
        <div className="container">
          <div className="section-header">
            <h2>⚡ Our Elite Collection ⚡</h2>
            <p>6 masterpieces redefining automotive excellence</p>
          </div>
          <div className="cars-grid">
            {carsData.map(car => (
              <CarCard key={car.id} car={car} onClick={openDetail} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by car enthusiasts worldwide</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Absolutely incredible experience! The team at Velocity helped me find my dream car. Professional, transparent, and passionate about what they do."</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" />
                <div className="author-info">
                  <h4>John Davis</h4>
                  <p>Lamborghini Owner</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"Best decision I ever made. The car was delivered in perfect condition and the after-sales support is outstanding. Highly recommended!"</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" />
                <div className="author-info">
                  <h4>Sarah Williams</h4>
                  <p>Ferrari Owner</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"From selection to delivery, everything was seamless. Velocity exceeded all my expectations. Will definitely buy again!"</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/68.jpg" alt="Client" />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Porsche Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In <span className="gradient">Touch</span></h2>
              <p>Have questions? We'd love to hear from you. Our team is ready to assist you 24/7.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Auto Avenue, Dubai, UAE</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>+1 234 567 890</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>info@velocity.com</span>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Subscribe to Our <span className="gradient">Newsletter</span></h2>
            <p>Get the latest updates on new arrivals, exclusive offers, and events.</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Enter your email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} required />
              <button type="submit">Subscribe <i className="fas fa-bell"></i></button>
            </form>
          </div>
        </div>
      </section>

       {/* Footer */}
       <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3><i className="fas fa-car-side"></i> VELOCITY</h3>
            <p>Experience the thrill of ultimate performance and luxury. Redefining automotive excellence since 2010.</p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fab fa-tiktok"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p onClick={() => scrollToSection('home')}>🏠 Home</p>
            <p onClick={() => scrollToSection('about')}>📖 About Us</p>
            <p onClick={() => scrollToSection('cars')}>🏎️ Our Models</p>
            <p onClick={() => scrollToSection('contact')}>📞 Contact</p>
          </div>
          <div className="footer-section">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9am - 8pm</p>
            <p>Saturday: 10am - 6pm</p>
            <p>Sunday: Closed</p>
            <p>24/7 Online Support</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 VELOCITY | All Rights Reserved | Designed for Car Enthusiasts</p>
        </div>
      </footer>
      

     
      

      {selectedCar && <CarDetail car={selectedCar} onClose={closeDetail} />}
            {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose <span className="gradient">Velocity?</span></h2>
            <p>Experience the difference with our premium services</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h3>Unmatched Performance</h3>
              <p>Every car is tested to deliver maximum power, speed, and precision handling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Premium Warranty</h3>
              <p>5-year comprehensive warranty on all vehicles with 24/7 roadside assistance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Support</h3>
              <p>Dedicated concierge service available anytime, anywhere in the world.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;