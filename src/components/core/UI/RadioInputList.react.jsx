import React from 'react';
import RadioInput from './RadioInput.react';
import {getLetterFromId} from '../../../service/util/util';

const RadioInputList = ({groupName, options, onSelect, disabled}) => {
  const optionsList = options.map((option, index) => {
    return (
      <RadioInput
        key={index}
        index={index}
        disabled={disabled}
        groupName={groupName}
        onSelect={onSelect}
      >
        {`${getLetterFromId(index)}) ${option}`}
      </RadioInput>
    );
  });
  return optionsList;
};

export default RadioInputList;
