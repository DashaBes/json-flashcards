import React, {useState} from 'react';
import classes from './style/Question.module.css';
import {getLetterFromId} from '../../service/util/util';
import Icon from '../../components/core/UI/Icon.react';

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
  let iconType;

  if (selected) {
    iconType = isCorrect ? 'correct' : 'incorrect';
    styles.push(classes.selected);
  }

  if (showFeedback) {
    styles.push(classes.disabled);
    if (isCorrect) {
      iconType = 'correct';
    }
  }


  return (
    <div className={classes.QuestionContainer}>
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
      <Icon size={1.5} type={iconType} />
      <label className={styles.join(' ')} htmlFor={id}>
        {`${getLetterFromId(index)}) ${option}`}
      </label>
    </div>
  );
};

export default Question;
