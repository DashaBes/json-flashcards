import React from 'react';
import classes from './style/HorizontalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const HorizontalLayout = ({center, children}) => {
  const classList = [classes.VerticalLayout];
  if (center) {
    classList.push(centerClasses[center]);
  }

  return <div className={classList.join(' ')}>{children}</div>;
};

export default HorizontalLayout;
