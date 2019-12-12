import React from 'react';
import Text from './Text.react';
import classes from './style/Header.module.css';

const Header = ({text}) => {
  return (
    <header className={classes.Header}>
      <Text type="header1" className={classes.Text} align="center">
        {text}
      </Text>
    </header>
  );
};

export default Header;
