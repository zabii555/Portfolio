import React, { useEffect } from 'react';

const CarDetail = ({ car, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        <div className="detail-grid">
          <div className="detail-image">
            <img src={car.image} alt={car.name} />
          </div>
          <div className="detail-info">
            <h2>{car.name}</h2>
            <p className="detail-brand">{car.brand}</p>
            <p className="detail-desc">{car.description}</p>
            <div className="detail-specs">
              <div className="spec-item">
                <i className="fas fa-dollar-sign"></i>
                <span><strong>Price</strong> {car.price}</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-microchip"></i>
                <span><strong>Engine</strong> {car.engine}</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-horse-head"></i>
                <span><strong>Power</strong> {car.horsepower}</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-tachometer-alt"></i>
                <span><strong>Top Speed</strong> {car.topSpeed}</span>
              </div>
              <div className="spec-item">
                <i className="fas fa-stopwatch"></i>
                <span><strong>0-60 mph</strong> {car.acceleration}</span>
              </div>
            </div>
            <button className="book-btn" onClick={() => alert('✅ Test drive booked successfully! Our team will contact you soon.')}>
              Book Test Drive <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;