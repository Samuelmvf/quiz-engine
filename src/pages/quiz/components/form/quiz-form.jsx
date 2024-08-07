import { useForm, FormProvider } from "react-hook-form"

import Button from "@/components/button/button.jsx";

import QuizQuestion from "@/pages/quiz/components/question/quiz-question.jsx";

import './quiz-form.scss'

const QuizForm = ({ currentQuestion, answer, showPreviousButton, isLastQuestion, handleSubmitAnswer, handleBackForPreviousQuestion }) => {
  const methods = useForm();

  const { handleSubmit, formState: { errors } } = methods;
  const { answer: answerError } = errors;

  return (
    <FormProvider {...methods }>
      <form onSubmit={handleSubmit(handleSubmitAnswer)} className="form">
        {answerError && <p style={{ color: 'red'}}>{answerError.message}</p>}

        <QuizQuestion
          id={currentQuestion.id}
          type={currentQuestion.type}
          title={currentQuestion.title}
          description={currentQuestion.description}
          image={currentQuestion.image}
          options={currentQuestion.options}
          answer={answer}
        />

        <footer className={`form__actions${showPreviousButton ? '' : '--single-button'}`}>
          {showPreviousButton && <Button text="Previous Question" onClick={handleBackForPreviousQuestion} />}
          <Button text={isLastQuestion ? "Finish quiz" : "Next question" } type="submit" />
        </footer>
      </form>
    </FormProvider>
  );
}

export default QuizForm;