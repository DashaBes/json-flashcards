import React, {useState, useMemo} from 'react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import withDragAndDrop from '../components/hoc/withDragAndDrop.react';
import Button from '../components/core/UI/Button.react';
import Quiz from '../quiz/Quiz.react';
import Spinner from '../components/core/UI/Spinner.react';
import {randomizeArray} from '../service/util/util';
import Icon from '../components/core/UI/Icon.react';
import classes from './Landing.module.css';

const Landing = () => {
  const [isLoading, setLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);

  const handleDrop = async e => {
    if (e.dataTransfer.items) {
      setLoading(true);
      const file = e.dataTransfer.items[0];
      if (file.kind === 'file' && file.type === 'application/json') {
        const fileContents = await file.getAsFile().text();
        const fileData = JSON.parse(fileContents);
        // Error handling should go here
        setQuizData(randomizeArray(fileData));
      }
      setLoading(false);
    }
  };

  const handleUpload = async e => {
    if (e.target.files) {
      setLoading(true);
      const file = e.target.files[0];
      if (file.type === 'application/json') {
        const fileContents = await file.text();
        const fileData = JSON.parse(fileContents);
        // Error handling should go here
        setQuizData(randomizeArray(fileData));
      }
      setLoading(false);
    }
  };
  const DragAndDropCard = useMemo(() => withDragAndDrop(Card, handleDrop), []);
  const quizEndHandler = () => setQuizData(null);

  return (
    <>
      {!quizData ? (
        <VerticalLayout center="middle" className={classes.Landing}>
          <Text bold="true" style={{color: '#8F2357'}} type="title">JSON Flashcards</Text>
          <Text type="body1">
            Create flashcards quickly from a formatted .json file.
          </Text>
          <DragAndDropCard enabled={!isLoading} className={classes.Card}>
            {!isLoading ? (
              <VerticalLayout center="middle">
                <div className={classes.icon_wrapper}>
                  <Icon size="3rem" type="drag" />
                  <Text type="header2" align="center">
                    Drag and drop your .json file here
                  </Text>
                </div>
                <Text type="body1">or</Text>
                <Button
                  id="fileUpload"
                  type="file"
                  value="Upload"
                  onChange={handleUpload}
                  style={{marginTop: '12px'}}
                ></Button>
              </VerticalLayout>
            ) : (
              <Spinner text="Loading your cards..." />
            )}
          </DragAndDropCard>
          <div className={classes.icon_wrapper}>
            <Icon size="1.5rem" type="help" />
            <Text type="body1">
              <Button style={{color:'black'}}type="link" value="How do I format my .json?" />
            </Text>
          </div>
        </VerticalLayout>
      ) : (
        <>
          {!isLoading && <Quiz data={quizData} finishQuiz={quizEndHandler} />}
        </>
      )}
    </>
  );
};

export default Landing;
