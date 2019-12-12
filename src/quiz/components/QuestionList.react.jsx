import React, {useMemo} from 'react';
import Question from './Question.react';
import {randomizeArray, getStringHash} from '../../service/util/util';
import VerticalLayout from '../../components/core/layout/VerticalLayout.react';

const QuestionList = ({
  questionId,
  questions,
  correct,
  shuffle,
  showFeedback,
  onAnswer,
}) => {
  const correctAnswer = questions[correct];
  let questionsList = useMemo(
    () => (shuffle ? randomizeArray(questions) : [...questions]),
    [shuffle, questions],
  );
  const correctIndex = useMemo(
    () => (shuffle ? questionsList.indexOf(correctAnswer) : correct),
    [correctAnswer, questionsList, correct, shuffle],
  );

  const questionsComponents = questionsList.map((option, index) => {
    return (
      <Question
        key={getStringHash(`${questionId}_${option}_${index}`)}
        index={index}
        showFeedback={showFeedback}
        questionId={questionId}
        correct={correctIndex}
        onAnswer={onAnswer}
        option={option}
      />
    );
  });
  return <VerticalLayout>{questionsComponents}</VerticalLayout>;
};

export default QuestionList;
