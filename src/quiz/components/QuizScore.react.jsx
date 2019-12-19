import React from 'react';
import Text from '../../components/core/UI/Text.react';
import classes from './style/QuizScore.module.css';

const QuizScore = ({current, total}) => {
  const percentage = Math.floor((current * 100) / total);
  return (
    <>
      <div className={classes.QuizScore}>
        <Text type="header1" variant="primary" align="center" bold>
          {!Number.isNaN(percentage) ? `${percentage}%` : '____'}
        </Text>
      </div>
      <Text type="body1" align="center">
        Current score
      </Text>
    </>
  );
};

export default QuizScore;
