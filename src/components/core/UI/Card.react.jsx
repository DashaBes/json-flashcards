import React from 'react';
import classes from './style/Card.module.css';

const Card = ({children, onDragOver, onDrop, onDragLeave, style}) => {
  return (
    <div
      className={classes.Card}
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
