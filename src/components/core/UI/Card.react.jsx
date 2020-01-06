import React from 'react';
import classes from './style/Card.module.css';

const Card = ({
  children,
  onDragOver,
  onDrop,
  onDragLeave,
  rounded,
  instructions,
  credits,
  transparent,
  dashed,
}) => {
  return (
    <div
      className={[
        classes.Card,
        rounded && classes.rounded,
        instructions && classes.instructions,
        credits && classes.credits,
        transparent && classes.transparent,
        dashed && classes.dashed
      ].join(' ')}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragLeave={onDragLeave}
    >
      {children}
    </div>
  );
};

export default Card;
