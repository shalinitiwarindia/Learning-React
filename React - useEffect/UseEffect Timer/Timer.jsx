import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, endTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime < endTime) {
          return prevTime + 1;
        } else {
          clearInterval(timerInterval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [endTime]);

  return (
    <div>
      <h1>{time} seconds</h1>
    </div>
  );
};

export default Timer;
