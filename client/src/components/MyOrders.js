import React, { useState } from 'react';
import './MyOrders.css';
import orderdata from './orderData';

const MyOrders = () => {
  const storedData = localStorage.getItem('userData');
  const parsedData = JSON.parse(storedData);
  const userId = parsedData.id;
  const orderData = orderdata.find((order) => order.user_id === userId);
  const [orders, setOrders] = useState(orderData.orders);

  const handleCancelOrder = (orderId) => {
    console.log('Cancel order with id:', orderId);
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  const handleReorder = (items) => {
    console.log('Reordering items:', items);
    alert('processing backend soon...');
  };

  const getOrderStatusColor = (status) => {
    return status === 'Delivered' ? 'green' : 'red';
  };

  return (
    <div className="my-orders">
      <h4 className="section-title">Orders from the Past Are Here:</h4>
      {orders.map((order) => (
        <div key={order.id} className="order">
          <div className="order-header">
            <div className="order-details">
              <div className="order-id">#{order.orderNumber}</div>
              <div className="order-products">
                {order.items.map((item) => (
                  <div key={item.id} className="order-product">
                    <a href={`${item.link}-details/${order.id}`} className="product-name">
                      {item.name}
                    </a>
                    <div className="product-quantity">Quantity: {item.quantity}</div>
                    <div className="product-price">Price: ${item.currentPrice}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-status-container">
              <h3>Order Status</h3>
              <div
                className="order-status"
                style={{ color: getOrderStatusColor(order.status) }}
              >
                {order.status}
              </div>
              {order.status === 'In Progress' && (
                <button className="cancel-order-button" onClick={() => handleCancelOrder(order.id)}>
                  Cancel Order
                </button>
              )}
              {order.status === 'Delivered' && (
                <button className="reorder-button" onClick={() => handleReorder(order.items)}>
                  Reorder
                </button>
              )}
            </div>
            <div className="order-summary">
              {order.status === 'Delivered' && (
                <div className="order-date">
                  <p>Delivered Date</p>
                  <div>{order.date}</div>
                </div>
              )}
              {order.status === 'In Progress' && (
                <div className="order-date">
                  <p>Estimated Arrival</p>
                  <div>{order.date}</div>
                </div>
              )}
              <div className="order-total-amount">Total Amount: ${order.totalAmount}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;