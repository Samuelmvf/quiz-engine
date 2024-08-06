import { useState } from 'react'

import QuizForm from "@/pages/quiz/components/form/quiz-form.jsx";

import mockedQuizData from '@/assets/api-response-1.json'
import quizLogo from '@/assets/quiz-logo.svg'

import { QUESTION_TYPE } from "@/constants/question-type.js";

import './page-quiz.scss'

const getDefaultAnswers = () => {
  const answersMap = new Map();

  mockedQuizData.questions
    .forEach((question) => (answersMap.set(`QUESTION_${question.id}`, QUESTION_TYPE.MULTIPLE_CHOICE === question.type ? [] : null)));

  return answersMap;
}

const PageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(mockedQuizData.questions.at(0));
  const [answers, setAnswers] = useState(getDefaultAnswers());

  const showPreviousButton = mockedQuizData.questions.findIndex(question => question.id === currentQuestion.id) > 0;

  const handleSubmitAnswer = ({ answer }) => {
    const newMapOfAnswers = new Map(answers);
    const formattedAnswer = QUESTION_TYPE.ONE_CHOICE === currentQuestion.type ? Number(answer) : answer;

    newMapOfAnswers.set(`QUESTION_${currentQuestion.id}`, formattedAnswer);
    setAnswers(newMapOfAnswers)

    onQuestionResponseGoToNextQuestion()
  }

  const onQuestionResponseGoToNextQuestion = () => {
    const nextQuestionIndex = mockedQuizData.questions.findIndex(question => question.id === currentQuestion.id) + 1;

    if (nextQuestionIndex < mockedQuizData.questions.length) {
      setCurrentQuestion(mockedQuizData.questions[nextQuestionIndex]);
    }
    // TODO jump question
    // TODO finish quiz
  }

  const handleBackForPreviousQuestion = () => {
    const currentQuestionIndex = mockedQuizData.questions.findIndex((question) => question.id === currentQuestion.id);

    if (currentQuestionIndex > 0) {
      setCurrentQuestion(mockedQuizData.questions[currentQuestionIndex - 1])
    }

    // TODO jump if previous question if N/A
  }

  return (
      <section className="quiz" aria-label="quiz section">
        <header className="quiz__header">
          <img className="quiz__header__logo" src={quizLogo} alt="quiz logo"/>
          <h1 className="quiz__header__title">{mockedQuizData.title}</h1>
        </header>

        <QuizForm
          key={currentQuestion.id}
          currentQuestion={currentQuestion}
          answers={answers}
          showPreviousButton={showPreviousButton}
          handleSubmitAnswer={handleSubmitAnswer}
          handleBackForPreviousQuestion={handleBackForPreviousQuestion}
        />
      </section>
  )
}

export default PageQuiz;
