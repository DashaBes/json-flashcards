import React from 'react';
import classes from './style/CenteredLayout.module.css';

const CenteredLayout = ({children}) => {
  return <div className={classes.CenteredLayout}>{children}</div>;
};

export default CenteredLayout;
