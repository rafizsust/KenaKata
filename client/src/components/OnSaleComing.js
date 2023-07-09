import React, { useState, useEffect } from 'react';
import './OnSaleComing.css';
import Products from './data'
const OnSaleComing = ({ saleStartTime, saleDuration }) => {
  const [isSaleComing, setIsSaleComing] = useState(false);
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  useEffect(() => {
    const calculateTimer = () => {
      const currentTime = new Date().getTime();
      const timeDifference = saleStartTime - currentTime;

      if (timeDifference > 0) {
        setIsSaleComing(true);

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimerDays(formatTimerValue(days));
        setTimerHours(formatTimerValue(hours));
        setTimerMinutes(formatTimerValue(minutes));
        setTimerSeconds(formatTimerValue(seconds));
      } else {
        const saleEndTime = saleStartTime + saleDuration;
        const endTimeDifference = saleEndTime - currentTime;

        if (endTimeDifference > 0) {
          setIsSaleComing(false);

          const days = Math.floor(endTimeDifference / (1000 * 60 * 60 * 24));
          const hours = Math.floor((endTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((endTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((endTimeDifference % (1000 * 60)) / 1000);

          setTimerDays(formatTimerValue(days));
          setTimerHours(formatTimerValue(hours));
          setTimerMinutes(formatTimerValue(minutes));
          setTimerSeconds(formatTimerValue(seconds));
        }
      }
    };

    const formatTimerValue = (value) => {
      return value < 10 ? `0${value}` : value;
    };

    const timer = setInterval(calculateTimer, 1000);

    return () => clearInterval(timer);
  }, [saleStartTime, saleDuration]);

  const updateProductDiscounts = () => {
      
  };

  useEffect(() => {
    updateProductDiscounts();
  }, []);

  return (
    <div className="on-sale-coming">
      {isSaleComing ? (
        <>
          <h3>Sale is Coming Soon!</h3>
          <div className="timer">
            <div className="timer-box">
              <div className="timer-value">{timerDays}</div>
              <div className="timer-label">Days</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerHours}</div>
              <div className="timer-label">Hours</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerMinutes}</div>
              <div className="timer-label">Minutes</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerSeconds}</div>
              <div className="timer-label">Seconds</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h3>Sale Ends In</h3>
          <div className="timer">
            <div className="timer-box">
              <div className="timer-value">{timerDays}</div>
              <div className="timer-label">Days</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerHours}</div>
              <div className="timer-label">Hours</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerMinutes}</div>
              <div className="timer-label">Minutes</div>
            </div>
            <div className="timer-separator">:</div>
            <div className="timer-box">
              <div className="timer-value">{timerSeconds}</div>
              <div className="timer-label">Seconds</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OnSaleComing;
