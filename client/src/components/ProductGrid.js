import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './ProductList.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <Link key={product.id} to={`/product-details/${product.id}`} className="product-box">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <Rating rating={product.rating} totalRatings={product.totalRatings} />
            {product.discount > 0 && <div className="discount">{product.discount}% off</div>}
            <div className="price">
              <span className="previous-price">${product.previousPrice}</span> ${product.currentPrice}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
