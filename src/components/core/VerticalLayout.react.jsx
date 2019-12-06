import React from 'react';
import classes from './style/VerticalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const VerticalLayout = ({center, children}) => {
  const classList = [classes.VerticalLayout];
  if (center) {
    classList.push(centerClasses[center]);
  }

  return <div className={classList.join(' ')}>{children}</div>;
};

export default VerticalLayout;
