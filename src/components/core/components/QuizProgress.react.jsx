import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import Text from '../../components/core/UI/Text.react';
import classes from './style/QuizProgress.module.css';

const QuizProgress = ({current, total}) => {
  return (
    <div style={{textAlign: "center"}}>
      <CircularProgressbar
        strokeWidth={16}
        value={(current * 100) / total}
        className={classes.ProgressRing}
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: 'butt',

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.25,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `#D6D948`,
          trailColor: '#8F2357',
        })}
      />
      <Text type="body1" align="center">{`Card ${current} of ${total}`}</Text>
    </div>
  );
};

export default QuizProgress;
