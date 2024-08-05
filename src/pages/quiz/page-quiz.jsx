import { useEffect, useState } from 'react'

import mockedQuizData from '@/assets/api-response-1.json'
import quizLogo from '@/assets/quiz-logo.svg'

import './page-quiz.scss'
import Button from "@/components/button/button.jsx";
import Question from "@/pages/quiz/components/question/question.jsx";

const PageQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(mockedQuizData.questions.at(0));
  const [quizAnswers, setQuizAnswers] = useState([]);

  return (
    <section className="quiz" aria-label="quiz section">
      <header className="quiz__header">
        <img className="quiz__header__logo" src={quizLogo} alt="quiz logo"/>
        <h1 className="quiz__header__title">{mockedQuizData.title}</h1>
      </header>

      <div className="quiz__content">
        <Question
          type={currentQuestion.type}
          title={currentQuestion.title}
          description={currentQuestion.description}
          image={currentQuestion.image}
        />
      </div>

      <footer className="quiz__actions">
        <Button text="Next question" onClick={() => console.log("OK")}  />
      </footer>
    </section>
  )
}

export default PageQuiz;
