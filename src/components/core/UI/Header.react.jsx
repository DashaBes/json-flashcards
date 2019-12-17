import React from 'react';
import Text from './Text.react';
import classes from './style/Header.module.css';
import VerticalLayout from '../layout/VerticalLayout.react';

const Header = ({text, children}) => {
  return (
    <header className={classes.Header}>
      <Text type="header1" className={classes.Text} align="center">
        {text}
      </Text>
      <VerticalLayout className={classes.Header_Links} >
        {children}
      </VerticalLayout>
    </header>
  );
};

export default Header;
