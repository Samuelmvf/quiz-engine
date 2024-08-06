import React from 'react';

import AnswerRadioButton from "@/pages/quiz/components/answer/radio-button/answer-radio-button.jsx";
import AnswerCheckBox from "@/pages/quiz/components/answer/check-box/answer-check-box.jsx";
import AnswerInputText from "@/pages/quiz/components/answer/input-text/answer-input-text.jsx";

import { QUESTION_TYPE } from "@/constants/question-type.js";

const QuizAnswer = ({ type, options }) => {

  if (QUESTION_TYPE.ONE_CHOICE === type) {
    return <AnswerRadioButton options={options} />
  }

  if (QUESTION_TYPE.MULTIPLE_CHOICE === type) {
    return <AnswerCheckBox options={options} />
  }

  return (
    <AnswerInputText />
  )
}

export default QuizAnswer;