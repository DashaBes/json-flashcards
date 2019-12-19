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
          strokeLinecap: 'butt',
          pathTransitionDuration: 0.25,
          pathColor: 'var(--color-secondary)',
          trailColor: 'var(--color-primary)',
        })}
      />
      <Text type="body1" align="center">{`Card ${current} of ${total}`}</Text>
    </div>
  );
};

export default QuizProgress;
