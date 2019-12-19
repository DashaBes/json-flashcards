import React from 'react';
import classes from './style/Icon.module.css';
import icons from './util/icons';

const Icon = ({size, type}) => {
  return (
    <div
      className={classes.Icon}
      style={{
        width: `${size + size / 2}rem`,
        height: `${size}rem`,
        backgroundSize: `${size}rem`,
        backgroundImage: `url('${icons[type]}')`
      }}
    ></div>
  );
};

export default Icon;
