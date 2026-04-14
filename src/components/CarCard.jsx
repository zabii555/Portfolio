import React from 'react';

const CarCard = ({ car, onClick }) => {
  const handleClick = () => {
    onClick(car);
  };

  return (
    <div className="car-card">
      <div className="card-image">
        <img src={car.image} alt={car.name} loading="lazy" />
        <div className="card-badge">🔥 HOT</div>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3>{car.name}</h3>
          <span className="brand">{car.brand}</span>
        </div>
        <div className="card-stats">
          <div className="stat">
            <i className="fas fa-tachometer-alt"></i>
            <span>{car.horsepower}</span>
          </div>
          <div className="stat">
            <i className="fas fa-stopwatch"></i>
            <span>{car.acceleration}</span>
          </div>
        </div>
        <div className="card-price">{car.price}</div>
        <button className="view-btn" onClick={handleClick}>
          View Details <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default CarCard;