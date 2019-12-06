import React, {useState, useMemo} from 'react';
import VerticalLayout from '../components/core/layout/VerticalLayout.react';
import Card from '../components/core/UI/Card.react';
import Text from '../components/core/UI/Text.react';
import withDragAndDrop from '../components/hoc/withDragAndDrop.react';
import Button from '../components/core/UI/Button.react';
import Quiz from '../quiz/Quiz.react';
import Spinner from '../components/core/UI/Spinner.react';

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
        setQuizData(fileData);
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
        setQuizData(fileData);
      }
      setLoading(false);
    }
  };

  const DragAndDropCard = useMemo(() => withDragAndDrop(Card, handleDrop), []);

  return (
    <VerticalLayout center="middle">
      {!quizData ? (
        <>
          <Text type="header1">JSON Flashcards</Text>
          <Text type="header2">
            Create flashcards quickly from a formatted .json file.
          </Text>
          <DragAndDropCard enabled={!isLoading}>
            {!isLoading ? (
              <VerticalLayout center="middle">
                <Text type="header2" align="center">
                  Drag and drop your .json file here
                </Text>
                <Text type="header2">or</Text>
                <Button
                  id="fileUpload"
                  type="file"
                  value="Upload"
                  onChange={handleUpload}
                ></Button>
              </VerticalLayout>
            ) : (
              <Spinner text="Loading your cards..."/>
            )}
          </DragAndDropCard>
        </>
      ) : (
        <Quiz data={quizData} />
      )}
    </VerticalLayout>
  );
};

export default Landing;
