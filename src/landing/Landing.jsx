import React, {useState, useMemo} from 'react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import withDragAndDrop from '../components/hoc/withDragAndDrop.react';
import Button from '../components/core/UI/Button.react';
import Quiz from '../quiz/Quiz.react';
import Spinner from '../components/core/UI/Spinner.react';
import {randomizeArray} from '../service/util/util';
import IconWrapper from '../components/core/UI/IconWrapper.react';
import classes from './Landing.module.css';
import Modal from '../components/core/UI/Modal.react';

const Landing = () => {
  const [isLoading, setLoading] = useState(false);
  const [isViewingInstructions, setViewingInstructions] = useState(false);
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

  const setNewQuizData = data => {
    setQuizData(randomizeArray(data));
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

  const handleViewModal = () => setViewingInstructions(true);
  const handleHideModal = () => setViewingInstructions(false);

  const DragAndDropCard = useMemo(() => withDragAndDrop(Card, handleDrop), []);
  const quizEndHandler = () => setQuizData(null);
  const quizRestartHandler = () =>
    setQuizData(currQuizData => randomizeArray(currQuizData));

  return (
    <>
      {!quizData ? (
        <>
          {isViewingInstructions && (
            <Modal hideModal={handleHideModal}>
              <Card instructions>
                <VerticalLayout center="middle">
                  <Text type="body1"> In order to use this tool, your .json quiz file must be formatted in a specific way.
                  </Text>
                  <Text type='body1'>
                    Format your questions and multiple choice answers as shown in the example below, specifying the correct answer by its index in the options array.
                  </Text>

                    

                    <Button
                      type="button"
                      value="got it"
                      onClick={handleHideModal}
                    ></Button>
                  
                </VerticalLayout>
              </Card>
            </Modal>
          )}
          <VerticalLayout center="middle" spaceBetween={1.25}>
            <Text variant="primary" bold type="title">
              JSON Flashcards
            </Text>
            <Text type="body1">
              Create flashcards quickly from a formatted .json file.
            </Text>
            <DragAndDropCard enabled={!isLoading} transparent>
              {!isLoading ? (
                <VerticalLayout center="middle">
                  <IconWrapper iconSize={3} iconType="drag">
                    <Text type="header2" align="center">
                      Drag and drop your .json file here
                    </Text>
                  </IconWrapper>
                  <Text type="body1">or</Text>
                  <Button
                    id="fileUpload"
                    type="file"
                    value="Upload"
                    onChange={handleUpload}
                  ></Button>
                </VerticalLayout>
              ) : (
                <Spinner text="Loading your cards..." />
              )}
            </DragAndDropCard>
            <IconWrapper iconSize={1.5} iconType="help">
              <div className={classes.format_instructions}>
                <Text type="body2" underline>
                  <Button
                    type="link"
                    value="How do I format my .json?"
                    onClick={handleViewModal}
                  />
                </Text>
              </div>
            </IconWrapper>
          </VerticalLayout>
        </>
      ) : (
        <>
          {!isLoading && (
            <Quiz
              data={quizData}
              setData={setNewQuizData}
              finishQuiz={quizEndHandler}
              restartQuiz={quizRestartHandler}
            />
          )}
        </>
      )}
    </>
  );
};

export default Landing;
