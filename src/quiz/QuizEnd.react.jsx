import React from 'react';
import Card from '../components/core/UI/Card.react';
import Button from '../components/core/UI/Button.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import HorizontalLayout from '../components/core/layout/HorizontalLayout.react';
import Text from '../components/core/UI/Text.react';
import classes from './QuizEnd.module.css';

const QuizEnd = ({
  returnHome,
  restartQuiz,
  restartQuizIncorrect,
  hasIncorrectAnswers,
}) => {
  return (
    <Card rounded>
      <VerticalLayout center="horizontal">
        <div className={classes.heading}>
          <Text type="header2" variant="primary" bold>
            You're done!
          </Text>
        </div>
        <div>
          <HorizontalLayout spaceBetween="1">
            <Button type="card" value="retry quiz" onClick={restartQuiz} />
            {hasIncorrectAnswers && (
              <Button
                type="card"
                value="retry incorrect questions only"
                onClick={restartQuizIncorrect}
              />
            )}
            <Button type="card" value="home" onClick={returnHome} />
          </HorizontalLayout>
        </div>
      </VerticalLayout>
    </Card>
  );
};

export default QuizEnd;
