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
      console.log('Dragging');
    };

    const dragLeaveHandler = e => {
      e.preventDefault();
      setStyle({});
      console.log('Dragging');
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
