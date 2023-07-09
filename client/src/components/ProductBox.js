import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductList.css';
const ProductBox = ({ image, name, rating, price, discount, previousPrice, totalRatings, count }) => {
  const isSoldOut = count === 0;

  return (
    <Link to="/" className={`product-box ${isSoldOut ? 'sold-out' : ''}`}>
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <Rating rating={rating} totalRatings={totalRatings} />
      <div className="price">
        {discount > 0 && (
          <div className="discount">{discount}% off</div>
        )}
        {previousPrice && (
          <div className="previous-price">{previousPrice}</div>
        )}
        <div className="current-price">{price}</div>
      </div>
      {isSoldOut && (
        <div className="sold-out-text">Sold Out</div>
      )}
    </Link>
  );
};

export default ProductBox;
