import React from 'react';
import Card from '../components/core/UI/Card.react';
import Button from '../components/core/UI/Button.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import HorizontalLayout from '../components/core/layout/HorizontalLayout.react';
import Text from '../components/core/UI/Text.react';
import classes from './QuizEnd.module.css';

const QuizEnd = () => {
  return (
      <Card rounded>
        <VerticalLayout center="horizontal">
          <div className={classes.heading}>
            <Text type="header2" variant="primary" bold>
            You're done!
            </Text>
          </div>
          <div>
            <HorizontalLayout spaceBetween='1'>
              <Card small>
                <VerticalLayout center='middle'>
                  <Text>retry quiz</Text>
                </VerticalLayout>
              </Card>
              <Card small>
                <VerticalLayout center='middle'>
                  <Text>retry incorrect questions only</Text>
                </VerticalLayout>
              </Card>
              <Card small>
                <VerticalLayout center='middle'>
                  <Text>home</Text>
                </VerticalLayout>
              </Card>
            </HorizontalLayout>
          </div>
        </VerticalLayout>
      </Card>

  );
};

export default QuizEnd;
