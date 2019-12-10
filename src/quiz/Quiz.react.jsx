import React, {useState} from 'react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import QuestionList from '../components/core/UI/QuestionList.react';
import Button from '../components/core/UI/Button.react';
import {getStringHash} from '../service/util/util';

const Quiz = ({data, finishQuiz}) => {
  const [answer, setAnswer] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const {question, options, correct} = data[questionIndex];

  const answerHandler = correct => {
    if (correct) {
      // Correct answer logic
    } else {
      // Incorrect answer logic
    }
  };

  return (
    <>
      <Text type="header1">Quiz</Text>
      <Card rounded>
        <VerticalLayout>
          <Text type="header2" bold>{question}</Text>
          <VerticalLayout style={{height: 'auto '}}>
            <QuestionList
              questionId={`question_${getStringHash(question)}`}
              questions={options}
              correct={correct}
              shuffle={true}
              showFeedback={answer ? true : false}
              onAnswer={(option, isCorrect) => {
                setAnswer(option);
                answerHandler(isCorrect);
              }}
            />
          </VerticalLayout>
        </VerticalLayout>
      </Card>
      {questionIndex + 1 !== data.length ? (
        <Button
          hidden={!answer ? true : false}
          value="Next"
          onClick={() => {
            setQuestionIndex(i => i + 1);
            setAnswer(null);
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
      <Text type="body2">{`Card ${questionIndex + 1} of ${data.length}`}</Text>
    </>
  );
};

export default Quiz;
