import React from 'react';
import classes from './style/Card.module.css';

const Card = ({children, onDragOver, onDrop, onDragLeave, style, rounded, className}) => {
  return (
    <div
      className={[classes.Card, rounded && classes.rounded, className].join(' ')}
      style={style}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    >
      {children}
    </div>
  );
};

export default Card;