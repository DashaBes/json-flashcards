import React, {Children} from 'react';
import classes from './style/VerticalLayout.module.css';

const centerClasses = {
  vertical: classes['vcenter'],
  horizontal: classes['hcenter'],
  middle: classes['middle'],
};

const VerticalLayout = ({center, spaceBetween, children}) => {
  const classList = [classes.VerticalLayout];
  if (center) {
    classList.push(centerClasses[center]);
  }

  return (
    <div className={classList.join(' ')}>
      {Children.map(children, child => {
        return (
          <div
            style={{padding: `${spaceBetween ? spaceBetween : 0.75}em 0`}}
            className={classes.child}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default VerticalLayout;
