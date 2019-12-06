import React from 'react';
import classes from './style/Button.module.css';

const Button = ({id, onChange, type, value}) => {
  let buttonType;
  switch (type) {
    case 'file':
      buttonType = 'file';
      break;
    case 'submit':
      buttonType = 'submit';
      break;
    default:
      buttonType = 'button';
  }

  return buttonType === 'file' ? (
    <>
      <input
        type="file"
        id={id}
        className={classes.hidden}
        accept={'.json'}
        onChange={onChange}
      />
      <label className={classes.Button} htmlFor={id}>
        Upload
      </label>
    </>
  ) : (
    <input type={buttonType} className={type === 'link' ? classes.Link : classes.Button} value={value} onChange={onChange} />
  );
};

export default Button;
