import './ProductList.css';
import React, { useState, useEffect } from 'react';

const SaleCountdown = ({ saleStartTime, saleDuration }) => {
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = saleStartTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(timeDifference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [saleStartTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="sale-countdown">
      <h2>Sale Ends In:</h2>
      <div className="countdown-timer">{formatTime(remainingTime)}</div>
    </div>
  );
};

export default SaleCountdown;
