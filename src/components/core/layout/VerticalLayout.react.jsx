import React from 'react';
import classes from './style/VerticalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const VerticalLayout = ({center, children, style}) => {
  const classList = [classes.VerticalLayout];
  if (center) {
    classList.push(centerClasses[center]);
  }

  return <div style={style} className={classList.join(' ')}>{children}</div>;
};

export default VerticalLayout;
