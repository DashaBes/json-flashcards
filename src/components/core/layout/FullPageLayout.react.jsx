import React from 'react';
import classes from './style/FullPageLayout.module.css';

const FullPageLayout = ({children}) => {
  return <div className={classes.FullPageLayout}>{children}</div>;
};

export default FullPageLayout;
