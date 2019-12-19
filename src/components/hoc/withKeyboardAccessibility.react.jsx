import React from 'react';

const withKeyboardAccessibility = (WrappedComponent, actionRef) => {
  return props => (
    <WrappedComponent
      {...props}
      tabIndex="0"
      onKeyDown={e => {
        if (e.key === 'Enter') {
          actionRef.current.click();
        }
      }}
      onKeyUp={e => {
        if (e.key === ' ') {
          actionRef.current.click();
        }
      }}
    />
  );
};

export default withKeyboardAccessibility;
