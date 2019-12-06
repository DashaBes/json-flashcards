import React from 'react';
import classes from './style/Card.module.css';

const Card = ({children}) => {
  return <div className={classes.Card}>{children}</div>;
};

export default Card;
