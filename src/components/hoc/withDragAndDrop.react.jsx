import React, {useState} from 'react';

const withDragAndDrop = (WrappedComponent, dropAction) => {
  return props => {
    const [dashed, setDashed] = useState(false);

    const dragOverHandler = e => {
      e.preventDefault();
      setDashed(true);
    };

    const dragLeaveHandler = e => {
      e.preventDefault();
      setDashed(false);
    };

    const wrappedDropAction = e => {
      e.preventDefault();
      setDashed(false);
      dropAction(e);
    };

    return (
      <WrappedComponent
        dashed={dashed}
        onDragOver={dragOverHandler}
        onDrop={wrappedDropAction}
        onDragLeave={dragLeaveHandler}
        {...props}
      ></WrappedComponent>
    );
  };
};

export default withDragAndDrop;
