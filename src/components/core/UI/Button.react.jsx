import React from 'react';
import classes from './style/Button.module.css';

const Button = ({
  id,
  style,
  onChange,
  type,
  value,
  disabled,
  hidden,
  onClick,
  className
}) => {
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
  let classList = [className];
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
      <label style={style} className={styles} htmlFor={id} onClick={onClick}>
        upload
      </label>
    </>
  ) : (
    <input
      style={style}
      type={buttonType}
      className={styles}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;
