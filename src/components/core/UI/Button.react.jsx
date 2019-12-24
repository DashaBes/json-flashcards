import React, {useRef, useMemo} from 'react';
import classes from './style/Button.module.css';
import withKeyboardAccessibility from '../../hoc/withKeyboardAccessibility.react';

const buttonTypes = new Set(['file', 'submit', 'button']);
const buttonStyles = new Map(
  [
    ['link', classes.Link],
    ['card', classes.Card]
  ]
)

const Button = ({id, onChange, type, value, disabled, hidden, onClick}) => {
  const buttonRef = useRef(null);
  const baseStyle = buttonStyles.has(type) ? buttonStyles.get(type) : classes.Button;
  const classList = [baseStyle];

  if (!buttonTypes.has(type)) {
    type = 'button';
  }

  if (hidden) {
    classList.push(classes.invisible);
  }
  const styles = classList.join(' ');
  const AccessibleLabel = useMemo(
    () => withKeyboardAccessibility(props => <label {...props} />, buttonRef),
    [buttonRef],
  );
  return type === 'file' ? (
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
      type={type}
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export default Button;
