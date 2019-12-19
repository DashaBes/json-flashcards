import React from 'react';
import Text from './Text.react';
import classes from './style/Header.module.css';
import VerticalLayout from '../layout/VerticalLayout.react';

const Header = ({text, children}) => {
  return (
    <header className={classes.Header}>
      <div className={classes.Text}>
        <Text type="header1" align="center" bold>
          {text}
        </Text>
      </div>

      <div className={classes.Header_Links}>
        <VerticalLayout>{children}</VerticalLayout>
      </div>
    </header>
  );
};

export default Header;
