import React, {Children} from 'react';
import classes from './style/HorizontalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const HorizontalLayout = ({center, children}) => {
  const classList = [classes.HorizontalLayout];
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

export default HorizontalLayout;
