import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';

const Rating = ({ rating, totalRatings }) => {
  const fullStars = Math.floor(rating);
  const decimalPart = rating - fullStars;

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }

  if (decimalPart > 0) {
    stars.push(<i key={fullStars} className="fas fa-star-half-alt"></i>);
  }

  return (
    <div className="rating">
      {stars}
      <span className="rating-count">({totalRatings})</span>
    </div>
  );
};

export default Rating;
