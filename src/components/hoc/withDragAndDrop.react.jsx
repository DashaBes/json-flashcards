import React, {useState} from 'react';

const withDragAndDrop = (WrappedComponent, dropAction) => {
  return props => {
    const [style, setStyle] = useState({});

    const dragOverHandler = e => {
      e.preventDefault();
      setStyle({
        borderWidth: '3px',
        borderStyle: 'dashed',
      });
    };

    const dragLeaveHandler = e => {
      e.preventDefault();
      setStyle({});
    };

    const wrappedDropAction = e => {
      e.preventDefault();
      setStyle({});
      dropAction(e);
    };

    return (
      <WrappedComponent
        style={style}
        onDragOver={dragOverHandler}
        onDrop={wrappedDropAction}
        onDragLeave={dragLeaveHandler}
        {...props}
      ></WrappedComponent>
    );
  };
};

export default withDragAndDrop;
