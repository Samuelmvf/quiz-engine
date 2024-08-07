import React from 'react';

import AnswerRadioButton from "@/pages/quiz/components/answer/radio-button/answer-radio-button.jsx";
import AnswerCheckBox from "@/pages/quiz/components/answer/check-box/answer-check-box.jsx";
import AnswerInputText from "@/pages/quiz/components/answer/input-text/answer-input-text.jsx";

import { QUESTION_TYPE } from "@/constants/question-type.js";

import './quiz-answer.scss'

const QuizAnswer = ({ type, options, answer }) => {

  const typeToAnswer = {
    [QUESTION_TYPE.ONE_CHOICE]: <AnswerRadioButton options={options} answer={answer} />,
    [QUESTION_TYPE.MULTIPLE_CHOICE]: <AnswerCheckBox options={options} answer={answer} />,
    [QUESTION_TYPE.INPUT_TEXT]: <AnswerInputText answer={answer} />,
  }

  return (
    <div className="question__answer">
      {typeToAnswer[type]}
    </div>
  )
}

export default QuizAnswer;