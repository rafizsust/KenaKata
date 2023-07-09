import React from 'react';
import './CardComponent.css';

const CardComponent = ({ data, handleCardClick }) => {
  const handleClick = (category) => {
    handleCardClick(category);
    console.log(category);
  };

  return (
    <div className="card-container">
      {data.map((card) => (
        <div className="card" key={card.id} onClick={() => handleClick(card.alt)}>
          <div className="card-image-container">
            <h3 className="card-heading">{card.heading}</h3>
            <img src={card.image} alt={card.category} />
            <h5 className="card-bottom">See Products...</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
