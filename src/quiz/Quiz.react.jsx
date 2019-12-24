import React, {useState} from 'react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import QuestionList from './components/QuestionList.react';
import Button from '../components/core/UI/Button.react';
import {getStringHash} from '../service/util/util';
import Header from '../components/core/UI/Header.react';
import Sidebar from '../components/core/UI/Sidebar.react';
import classes from './Quiz.module.css';
import Timer from '../components/core/UI/Timer.react';
import ProgressRing from './components/QuizProgress.react';
import QuizScore from './components/QuizScore.react';
import IconWrapper from '../components/core/UI/IconWrapper.react';
import QuizEnd from './QuizEnd.react';

const Quiz = ({data, finishQuiz}) => {
  const [answer, setAnswer] = useState(null);
  const [quizEnd, setQuizEnd] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const {question, options, correct} = data[questionIndex];

  const answerHandler = correct => {
    if (correct) {
      // Correct answer logic
      setScore(prevScore => prevScore + 1);
    } else {
      // Incorrect answer logic
    }
    setAnswered(prevAnswered => prevAnswered + 1);
  };

  return (
    <div className={classes.Quiz}>
      <Header text="JSON flashcards">
        <div className={classes.QuitButton}>
          <Button type="link" value="quit" onClick={finishQuiz} />
        </div>
      </Header>
      <div className={classes.QuizPanel}>
        <Sidebar>
          <div className={classes.Sidebar_Layout}>
            <VerticalLayout center="horizontal" spaceBetween={1.5}>
              <Text type="header2" bold>
                Stats
              </Text>
              <Timer stop={answer ? true : false} />
              <ProgressRing current={questionIndex + 1} total={data.length} />
              <QuizScore current={score} total={answered} />
            </VerticalLayout>
            <div className={classes.SettingsButton}>
              <IconWrapper iconType="gear" iconSize={1.5}>
                <div className={classes.SettingsButtonText}>
                  <Button type="link" value="settings"></Button>
                </div>
              </IconWrapper>
            </div>
          </div>
        </Sidebar>
        <VerticalLayout center="middle">
          {!quizEnd ? <Card rounded>
            <VerticalLayout>
              <div className={classes.title}>
                <Text type="header2" variant="primary" bold>
                  {question}
                </Text>
              </div>
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
          </Card> : <QuizEnd/>}
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
        </VerticalLayout>
      </div>
    </div>
  );
};

export default Quiz;
