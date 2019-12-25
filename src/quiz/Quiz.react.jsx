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

const getTimerHash = () => `timer_${getStringHash('timer', Date.now())}`;

const Quiz = ({data, setData, finishQuiz, restartQuiz}) => {
  const [timerKey, setTimerKey] = useState(getTimerHash());
  const [answer, setAnswer] = useState(null);
  const [quizEnd, setQuizEnd] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const {question, options, correct} = data[questionIndex];

  const answerHandler = isCorrect => {
    if (isCorrect) {
      // Correct answer logic
      setScore(prevScore => prevScore + 1);
    } else {
      setIncorrectAnswers(incorrect => [
        ...incorrect,
        {question, options, correct},
      ]);
    }
    setAnswered(prevAnswered => prevAnswered + 1);
  };

  const quizRestartHandler = () => {
    setQuizEnd(false);
    setIncorrectAnswers([]);
    setAnswer(null);
    setQuestionIndex(0);
    setScore(0);
    setAnswered(0);
    resetTimer();
    restartQuiz();
  };

  const resetTimer = () => {
    setTimerKey(getTimerHash());
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
              <Timer key={timerKey} stop={answer || quizEnd ? true : false} />
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
          {!quizEnd ? (
            <Card rounded>
              <div className={classes.QuestionWrapper}>
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
                <div className={classes.TransitionButton}>
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
                        setQuizEnd(true);
                      }}
                    ></Button>
                  )}
                </div>
              </div>
            </Card>
          ) : (
            <QuizEnd
              returnHome={finishQuiz}
              restartQuiz={quizRestartHandler}
              restartQuizIncorrect={() => {
                setData(incorrectAnswers);
                quizRestartHandler();
              }}
              hasIncorrectAnswers={incorrectAnswers.length > 0}
            />
          )}
        </VerticalLayout>
      </div>
    </div>
  );
};

export default Quiz;
