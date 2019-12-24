import React from 'react';
import classes from './style/Card.module.css';

const Card = ({
  children,
  onDragOver,
  onDrop,
  onDragLeave,
  rounded,
  small,
  transparent,
  dashed,
}) => {
  return (
    <div
      className={[
        classes.Card,
        rounded && classes.rounded,
        small && classes.small,
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
