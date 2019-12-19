import React from 'react';
import classes from './style/Button.module.css';

const Button = ({id, onChange, type, value, disabled, hidden, onClick}) => {
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
  let classList = [];
  if (type === 'link') {
    classList.push(classes.Link);
  } else {
    classList.push(classes.Button);
  }
  if (hidden) {
    classList.push(classes.invisible);
  }
  const styles = classList.join(' ');
  return buttonType === 'file' ? (
    <>
      <input
        type="file"
        id={id}
        className={classes.hidden}
        accept={'.json'}
        onChange={onChange}
        disabled={disabled}
      />
      <label className={styles} htmlFor={id} onClick={onClick}>
        upload
      </label>
    </>
  ) : (
    <input
      className={styles}
      type={buttonType}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;
