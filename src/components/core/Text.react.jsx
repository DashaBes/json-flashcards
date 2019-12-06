import React from 'react';
import classes from './style/Text.module.css';

const textProps = {
  header1: {
    tag: 'h1',
    className: 'header1',
  },
  header2: {
    tag: 'h2',
    className: 'header2',
  },
  header3: {
    tag: 'h3',
    className: 'header3',
  },
  body1: {
    tag: 'p',
    className: 'body1',
  },
  body2: {
    tag: 'p',
    className: 'body2',
  },
  body3: {
    tag: 'p',
    className: 'body3',
  },
  default: {
    tag: 'p',
  },
};
const Text = ({type, align, children}) => {
  const textType = textProps[type] ? textProps[type] : textProps.default;
  return <textType.tag style={{textAlign: align}} className={classes[textType.className]}>{children}</textType.tag>;
};

export default Text;
