import { useState } from 'react'

import QuizForm from "@/pages/quiz/components/form/quiz-form.jsx";

import mockedQuizData from '@/assets/api-response-1.json'
import quizLogo from '@/assets/quiz-logo.svg'

import { QUESTION_TYPE } from "@/constants/question-type.js";
import { NOT_APPLICABLE } from "@/constants/constants.js";

import './page-quiz.scss'
import QuizComplete from "@/pages/quiz/components/complete/quiz-complete.jsx";

const PageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(mockedQuizData.questions.at(0));
  const [answers, setAnswers] = useState({});

  const showPreviousButton = mockedQuizData.questions.findIndex(question => question.id === currentQuestion.id) > 0;

  const handleSubmitAnswer = async ({ answer }) => {
    const formattedAnswer = QUESTION_TYPE.ONE_CHOICE === currentQuestion.type ? Number(answer) : answer;
    const updatedAnswers = { ...answers, [`QUESTION_${currentQuestion.id}`]: formattedAnswer }
    setAnswers(updatedAnswers)

    onQuestionResponseGoToNextQuestion(updatedAnswers)
  }

  const onQuestionResponseGoToNextQuestion = (updatedAnswers) => {
    const currentQuestionIndex = mockedQuizData.questions.findIndex(question => question.id === currentQuestion.id);
    const nextValidQuestion = getNextValidQuestion(currentQuestionIndex, updatedAnswers);

    if (nextValidQuestion) {
      setCurrentQuestion(nextValidQuestion);
    } else {
      setCurrentQuestion({});
    }
  }

  const getNextValidQuestion = (currentQuestionIndex, updatedAnswers) => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < mockedQuizData.questions.length) {
      const nextQuestion = { ...mockedQuizData.questions[nextQuestionIndex] };
      const isValid = validateIfQuestionIsValid(nextQuestion.requiredAnswers, updatedAnswers)

      if (!isValid) {
        updatedAnswers = { ...updatedAnswers, [`QUESTION_${nextQuestion.id}`]: NOT_APPLICABLE };
        setAnswers(updatedAnswers);
      }

      return (isValid && nextQuestionIndex < mockedQuizData.questions.length)
        ? nextQuestion
        : getNextValidQuestion(nextQuestionIndex, updatedAnswers);
    }
    return null;
  }

  const validateIfQuestionIsValid = (requiredAnswers, updatedAnswers) => {
    return requiredAnswers.every(requiredAnswer => {
      const questionUniqueKey = `QUESTION_${requiredAnswer.questionId}`;
      const { type } = mockedQuizData.questions.find(({ id }) => id === requiredAnswer.questionId);
      const currentAnswer = updatedAnswers[questionUniqueKey];

      let isValid = false;
      if (QUESTION_TYPE.ONE_CHOICE === type) {
        isValid = currentAnswer === requiredAnswer.answer;
      } else if (QUESTION_TYPE.MULTIPLE_CHOICE === type) {
        isValid = currentAnswer && currentAnswer.some(answer => answer === requiredAnswer.answer);
      }
      return isValid;
    });
  }

  const handleBackForPreviousQuestion = () => {
    const currentQuestionIndex = mockedQuizData.questions.findIndex((question) => question.id === currentQuestion.id);
    const previousQuestion = getPreviousValidQuestion(currentQuestionIndex);

    if (previousQuestion) {
      setCurrentQuestion(previousQuestion)
    }
  }

  const getPreviousValidQuestion = (currentQuestionIndex) => {
    const previousQuestionIndex = currentQuestionIndex - 1;

    if (previousQuestionIndex > 0) {
      const previousQuestion = { ...mockedQuizData.questions[previousQuestionIndex] };

      return answers[`QUESTION_${previousQuestion.id}`] !== NOT_APPLICABLE
        ? previousQuestion
        : getPreviousValidQuestion(previousQuestionIndex);
    }

    return null;
  }

  const handleResetQuiz = () => {
    setAnswers({});
    setCurrentQuestion(mockedQuizData.questions.at(0))
  }

  return (
      <section className="quiz" aria-label="quiz section">
        { currentQuestion.id &&
          <>
            <header className="quiz__header">
              <img className="quiz__header__logo" src={quizLogo} alt="quiz logo"/>
              <h1 className="quiz__header__title">{mockedQuizData.title}</h1>
            </header>

            <QuizForm
              key={currentQuestion.id}
              currentQuestion={currentQuestion}
              answers={answers}
              showPreviousButton={showPreviousButton}
              isLastQuestion={currentQuestion.id === mockedQuizData.questions.at(-1).id}
              handleSubmitAnswer={handleSubmitAnswer}
              handleBackForPreviousQuestion={handleBackForPreviousQuestion}
            />
          </>
        }

        {!currentQuestion.id && <QuizComplete handleResetQuiz={handleResetQuiz}/>}
      </section>
  )
}

export default PageQuiz;
