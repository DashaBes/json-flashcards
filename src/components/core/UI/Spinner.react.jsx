import React from 'react';
import VerticalLayout from '../layout/VerticalLayout.react';
import classes from './style/Spinner.module.css';
import Text from './Text.react';

const Spinner = ({text}) => {
  return (
    <VerticalLayout center="middle">
      <div className={classes.Spinner}></div>
      <Text type="body1">{text}</Text>
    </VerticalLayout>
  );
};

export default Spinner;
