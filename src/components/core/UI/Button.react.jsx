import React, {useRef, useMemo} from 'react';
import classes from './style/Button.module.css';
import withKeyboardAccessibility from '../../hoc/withKeyboardAccessibility.react';

const Button = ({id, onChange, type, value, disabled, hidden, onClick}) => {
  const buttonRef = useRef(null);

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
  const AccessibleLabel = useMemo(
    () => withKeyboardAccessibility(props => <label {...props} />, buttonRef),
    [buttonRef],
  );
  return buttonType === 'file' ? (
    <>
      <input
        type="file"
        id={id}
        className={classes.hidden}
        accept={'.json'}
        onChange={onChange}
        disabled={disabled}
        ref={buttonRef}
      />
      <AccessibleLabel className={styles} htmlFor={id}>
        upload
      </AccessibleLabel>
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
