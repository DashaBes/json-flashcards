import React from 'react';
import classes from './style/Icon.module.css';

const iconStyles = {
  correct: classes.Correct,
  incorrect: classes.Incorrect,
  help: classes.Help,
  drag: classes.Drag
};

const Icon = ({size, type}) => {
  const styleType = iconStyles[type];
  return (
    <div
      className={[classes.Icon, styleType].join(' ')}
      style={{width: size, height: size, backgroundSize: size}}
    ></div>
  );
};

export default Icon;
