import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import './ProductDetails.css';
import data from './data';
import Footer from './Footer';

const ProductDetails = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const quantityOptions = product.sizes.length > 0
  ? Array.from(
      { length: selectedColor.count[product.sizes.indexOf(selectedSize)] },
      (_, index) => index + 1
    )
  : Array.from(
      { length: selectedColor.count },
      (_, index) => index + 1
    );


  const handleColorChange = (event) => {
    const selectedColorName = event.target.value;
    const selectedColorObject = product.colors.find((color) => color.name === selectedColorName);
    setSelectedColor(selectedColorObject);
  };

  const handleSizeChange = (event) => {
    const selectedSizeValue = event.target.value;
    setSelectedSize(selectedSizeValue);
  };

  return (
    
    <div className="product-details-container">
      <div className="product-details-heading">Details for product {product.name}</div>
      <div className="product-details-content">
        <div className="product-details-image">
          <img src={selectedColor.imgURL} alt="Product" />
        </div>
        <div className="product-details-info">
          <div className="product-details-name">{product.name}</div>
          <div className="product-details-sold">Total {product.totalSold} item Sold</div>
          <div className="product-details-condition">
            <div className="product-details-condition-text">{product.condition}</div>
          </div>

          <Rating rating={product.rating} totalRatings={product.totalRatings} />
          <div className="product-details-price-details">
            <span className="product-details-discount">{product.discount}% off</span>
            <span className="product-details-current-price">${product.currentPrice}</span>
            <span className="product-details-previous-price">Previous price was: ${product.previousPrice}</span>
          </div>
          <div className="product-details-size-color">
            {product.sizes.length > 0 && (
              <div className="product-details-size">
                Size: 
                <select className="product-details-size-dropdown" onChange={handleSizeChange}>
                  {product.colors.length > 0 && selectedColor.count[product.sizes.indexOf(selectedSize)] > 0 && (
                    <option value={selectedSize}>Size</option>
                  )}
                  {product.sizes.map((size, index) => (
                    selectedColor.count[index] > 0 && (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    )
                  ))}
                </select>
              </div>
            )}
            <div className="product-details-color">
              Color:
              <select className="product-details-color-dropdown" onChange={handleColorChange}>
                {product.colors.map((color, index) => (
                  <option key={index} value={color.name}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="product-details-description">
            <ul>
              {product.description.map((pro, index) => (
                <li key={index}>{pro}</li>
              ))}
            </ul>
          </div>
          {product.return > 0 && (
            <div className="product-details-return-container">
              <div className="product-details-return-container-heading">
                <h4>Don't Worry</h4>
              </div>
              <div className="product-details-return-container-text">{product.return} Days Easy Return</div>
            </div>
          )}
          <div className="product-details-description">
            <h4>Payment: Cash On Delivery Only</h4>
          </div>
        </div>
        <div className="product-details-purchase-details">
          <div className="product-details-price">{product.price}</div>
          {product.deliveryAddress && (
            <div className="product-details-delivery-address">{product.deliveryAddress}</div>
          )}
          <div
            className={`product-details-availability ${
              product.inStock ? 'product-details-in-stock' : 'product-details-sold-out'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Sold Out'}
          </div>
          <div className="product-details-delivery-date">Delivery Date: Monday, 13 Jan</div>
          <div className="product-details-quantity">
            Qty:
            <select className="product-details-quantity-dropdown">
              {quantityOptions.map((qty, index) => (
                <option key={index} value={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>
          <button className="product-details-add-to-cart-button">Add to Cart</button>
          <button className="product-details-order-now-button">Order Now</button>
          <div className="product-details-ship-from">Ship From: Bangladesh</div>
          <div className="product-details-sold-by">Sold By: Kenakata</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
