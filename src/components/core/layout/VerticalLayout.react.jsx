import React, {Children} from 'react';
import classes from './style/VerticalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const VerticalLayout = ({center, children}) => {
  const classList = [classes.VerticalLayout];
  if (center) {
    classList.push(centerClasses[center]);
  }

  return (
    <div className={classList.join(' ')}>
      {Children.map(children, child => {
        return <div className={classes.child}>{child}</div>;
      })}
    </div>
  );
};

export default VerticalLayout;
