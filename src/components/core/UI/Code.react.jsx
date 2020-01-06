import React from 'react';
import classes from './style/Code.module.css';

const Code = ({children}) => {
  return <pre className={classes.Code}>{children}</pre>;
};

export default Code;
