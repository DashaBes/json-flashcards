import React, {useState, useCallback, useMemo, useRef} from 'react';
import classes from './style/Question.module.css';
import {getLetterFromId} from '../../service/util/util';
import Icon from '../../components/core/UI/Icon.react';
import withKeyboardAccessibility from '../../components/hoc/withKeyboardAccessibility.react';

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
  const questionRef = useRef(null);
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

  const clickHandler = useCallback(() => {
    setSelected(true);
    onAnswer(option, isCorrect);
  }, [isCorrect, option, onAnswer]);

  const AccessibleLabel = useMemo(
    () => withKeyboardAccessibility(props => <label {...props} />, questionRef),
    [questionRef],
  );

  return (
    <div className={classes.QuestionContainer}>
      <input
        id={id}
        className={classes.hidden}
        type="radio"
        name={questionId}
        onClick={clickHandler}
        value={option}
        disabled={showFeedback}
        ref={questionRef}
      />
      <div>
        <Icon size={1.5} type={iconType} />
      </div>
      <AccessibleLabel className={styles.join(' ')} htmlFor={id}>
        {`${getLetterFromId(index)}) ${option}`}
      </AccessibleLabel>
    </div>
  );
};

export default Question;
