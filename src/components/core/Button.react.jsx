import React from 'react';

const Button = ({type, value}) => {
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
  return <input type={buttonType} label={value} accept={buttonType === 'file' && ".json"}/>;
};

export default Button;
