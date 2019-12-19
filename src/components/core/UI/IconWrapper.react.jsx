import React from 'react';
import Icon from './Icon.react';
import classes from './style/IconWrapper.module.css';

const IconWrapper = ({iconSize, iconType, children}) => {
  return (
    <div className={classes.IconWrapper}>
      <Icon size={iconSize} type={iconType} />
      {children}
    </div>
  );
};

export default IconWrapper;
