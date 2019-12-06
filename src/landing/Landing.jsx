import React from 'react';
import VerticalLayout from '../components/core/VerticalLayout.react';
import Card from '../components/core/Card.react';
import Text from '../components/core/Text.react';
import withDragAndDrop from '../components/hoc/withDragAndDrop.react';
import Button from '../components/core/Button.react';

const handleDrop = event => {
  console.log(event);
  console.log('Drop action');
};
const DragAndDropCard = withDragAndDrop(Card, handleDrop);

const Landing = () => {
  return (
    <VerticalLayout center="middle">
      <Text type="header1">JSON Flashcards</Text>
      <Text type="header2">
        Create flashcards quickly from a formatted .json file.
      </Text>
      <DragAndDropCard>
        <VerticalLayout center="middle">
          <Text type="header2" align="center">
            Drag and drop your .json file here
          </Text>
          <Text type="header2">or</Text>
          <Button type="file" value="Upload"></Button>
        </VerticalLayout>
      </DragAndDropCard>
    </VerticalLayout>
  );
};

export default Landing;
