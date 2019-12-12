import React, {useState} from 'react';
import classes from './style/Question.module.css';
import {getLetterFromId} from '../../service/util/util';

const Question = ({
  index,
  questionId,
  onAnswer,
  showFeedback,
  correct,
  option,
}) => {
  const id = `${questionId}_${index}`;
  const [selected, setSelected] = useState(false);
  const styles = [classes.Question];
  const isCorrect = index === correct;

  if (selected) {
    const feedbackStyle = isCorrect ? classes.correct : classes.incorrect;
    styles.push(feedbackStyle);
  }

  if (showFeedback) {
    styles.push(classes.disabled);
    if (isCorrect) {
      styles.push(classes.correct);
    }
  }

  return (
    <>
      <input
        id={id}
        className={classes.hidden}
        type="radio"
        name={questionId}
        onClick={() => {
          setSelected(true);
          onAnswer(option, isCorrect);
        }}
        value={option}
        disabled={showFeedback}
      />
      <label className={styles.join(' ')} htmlFor={id}>
        {`${getLetterFromId(index)}) ${option}`}
      </label>
    </>
  );
};

export default Question;
