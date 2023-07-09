import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CartComponent.css';
import Footer from './Footer';
import data from './data';
import cartData from './cartData';

const CartComponent = () => {
  const storedData = localStorage.getItem('userData');
  const parsedData = JSON.parse(storedData);
  const userId = parsedData?.id;
  const userCart = cartData.find((user) => user.user_id === userId);
  const [cart, setCart] = useState(userCart?.cart || []);

  const removeProduct = (productId) => {
    const confirmation = window.confirm('Are you sure you want to remove this product?');
    if (confirmation) {
      const updatedCart = cart.filter((product) => product.productId !== productId);
      setCart(updatedCart);
    }
  };

  const updateProductCount = (productId, count) => {
    const updatedCart = cart.map((product) =>
      product.productId === productId ? { ...product, count } : product
    );
    setCart(updatedCart);
  };

  const handleCheckboxChange = (productId) => {
    const updatedCart = cart.map((product) =>
      product.productId === productId ? { ...product, count: product.count > 0 ? 0 : 1 } : product
    );
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    window.location.href = '/account';
  };

  const calculateTotalItems = () => {
    let totalItems = 0;
    cart.forEach((product) => {
      totalItems += product.count;
    });
    return totalItems;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      const productData = data.find((item) => item.id === product.productId);
      if (productData) {
        totalPrice += productData.currentPrice * product.count;
      }
    });
    return totalPrice;
  };

  const cartRows = cart.map((product) => {
    const { productId, count } = product;
    const productData = data.find((item) => item.id === productId);

    if (productData) {
      return (
        <tr key={productId}>
          <td>
            <input
              type="checkbox"
              checked={count > 0}
              onChange={() => handleCheckboxChange(productId)}
            />
          </td>
          <td>
            <div className="product-info">
              <img
                className="product-cart-image"
                src={productData.image}
                alt={`Product ${productId}`}
              />
              <div className="product-details">
                <Link to={`/product-details/${productData.id}`}>
                  <p>{productData.name}</p>
                </Link>
                <p>Price: {productData.currentPrice}</p>
                <div className="count-container">
                  <button
                    className="count-button-minus"
                    onClick={() => updateProductCount(productId, count - 1)}
                    disabled={count <= 0}
                  >
                    -
                  </button>
                  <span>{count}</span>
                  <button
                    className="count-button-plus"
                    onClick={() => updateProductCount(productId, count + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className="remove-button" onClick={() => removeProduct(productId)}>
                Remove
              </button>
            </div>
          </td>
        </tr>
      );
    }
    return null;
  });

  return (
    <div className="main-cart">
      <div className="cart-container-heading">
        <p>Showing Items currently on Cart</p>
      </div>
      <div className="cart-container">
        <div className="left-column">
          <table className="product-table">
            <tbody>{cartRows}</tbody>
          </table>
        </div>

        <div className="right-column">
          {cartRows.length > 0 && (
            <div className="cart-order-summary">
              <h2>Order Summary</h2>
              {cart.map((product) => {
                const { productId, count } = product;
                const productData = data.find((item) => item.id === productId);
                if (productData && count > 0) {
                  const itemTotal = productData.currentPrice * count;
                  return (
                    <p key={productId}>
                      {productData.name} x {count} = {itemTotal} Tk
                    </p>
                  );
                }
                return null;
              })}
              <>
                <hr className="cart-horizontal-line" />
                <p className="cart-sub-total">Subtotal: {Math.floor(calculateTotalPrice())} $</p>
                <button
                  className="checkout-button"
                  onClick={handleCheckout}
                  disabled={calculateTotalItems() === 0}
                >
                  Checkout
                </button>
              </>
            </div>
          )}
        </div>
      </div>

      <div className="cart-bottom">
        <p>You Will Get Your Product at Your Doorstep Within 3 Days. We Are Currently Providing Cash On Delivery Service Only...</p>
      </div>
      <Footer />
    </div>
  );
};

export default CartComponent;
