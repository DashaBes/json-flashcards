import React, {useState, useEffect} from 'react';
import Text from './Text.react';
import classes from './style/Timer.module.css'

const Timer = () => {
  const [currentSeconds, setCurrentSeconds] = useState(null);
  useEffect(() => {
    setCurrentSeconds(0);
    const updateTime = setInterval(() => {
      setCurrentSeconds(prevTime => prevTime + 1);
    }, 1000);
    return () => {
      clearInterval(updateTime);
    };
  }, []);
  return (
    <>
      <Text type="header1" className={classes.Timer} align="center" bold>{secondsToFormattedTime(currentSeconds)}</Text>
      <Text type="body1" align="center">Time elapsed</Text>
    </>
  );
};

const secondsToFormattedTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export default Timer;
