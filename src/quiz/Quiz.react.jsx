import React from 'react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';

function* letterGenerator() {
  let letter = 'a';
  while (true) {
    yield letter;
    letter = String.fromCharCode(letter.charCodeAt() + 1);
  }
}

const Quiz = ({data}) => {
  const {question, options, correct} = data[0];
  const letter = letterGenerator();
  return (
    <>
      <Text type="header1">Quiz</Text>
      <Card style={{borderRadius: '2rem'}}>
        <VerticalLayout center="middle">
          <Text type="header2">{question}</Text>
          <VerticalLayout style={{height: 'auto '}}>
            {options.map((option, index) => {
              return (
                <Text
                  style={{paddingLeft: '1.5em'}}
                  key={index}
                  type="body1"
                >{`${letter.next().value}) ${option}`}</Text>
              );
            })}
          </VerticalLayout>
        </VerticalLayout>
      </Card>
    </>
  );
};

export default Quiz;
