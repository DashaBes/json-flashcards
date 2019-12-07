import React from 'react';
import classes from './style/RadioInput.module.css';

const RadioInput = ({index, groupName, onSelect, children, disabled}) => {
  const id = `${groupName}_${index}`;
  return (
    <>
      <input
        id={id}
        className={classes.hidden}
        type="radio"
        name={groupName}
        onClick={e => {
          
          onSelect(e);
        }}
        value={index}
        disabled={disabled}
      />
      <label className={classes.RadioInput} htmlFor={id}>
        {children}
      </label>
    </>
  );
};

export default RadioInput;
