import React, {useState, useEffect} from 'react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import RadioInputList from '../components/core/UI/RadioInputList.react';
import Button from '../components/core/UI/Button.react';

const Quiz = ({data, finishQuiz}) => {
  const [answer, setAnswer] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const {question, options, correct} = data[questionIndex];

  const answerHandler = userAnswer => {
    if (parseInt(userAnswer) === correct) {
      console.log('Correct');
    } else {
      console.log('Incorrect');
    }
  };

  useEffect(() => {
    setAnswer(null);
  }, [questionIndex]);

  return (
    <>
      <Text type="header1">Quiz</Text>
      <Card rounded>
        <VerticalLayout
          style={{justifyContent: 'space-between'}}
          center="horizontal"
        >
          <Text type="header2">{question}</Text>
          <VerticalLayout style={{height: 'auto '}}>
            <RadioInputList
              groupName={question.replace(/\s+/g, '')}
              options={options}
              disabled={answer ? true : false}
              onSelect={e => {
                const userAnswer = e.target.value;
                setAnswer(userAnswer);
                answerHandler(userAnswer);
              }}
            />
          </VerticalLayout>
          {questionIndex + 1 !== data.length ? (
            <Button
              hidden={!answer ? true : false}
              value="Next"
              onClick={() => {
                setQuestionIndex(i => i + 1);
              }}
            />
          ) : (
            <Button
              hidden={!answer ? true : false}
              value="Finish"
              onClick={() => {
                finishQuiz();
              }}
            ></Button>
          )}
        </VerticalLayout>
      </Card>
      <Text type="body2">{`Card ${questionIndex + 1} of ${data.length}`}</Text>
    </>
  );
};

export default Quiz;
