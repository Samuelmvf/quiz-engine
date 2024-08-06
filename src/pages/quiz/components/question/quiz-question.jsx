import LazyImg from "@/components/lazy-img/lazy-img.jsx";
import QuizAnswer from "@/pages/quiz/components/answer/quiz-answer.jsx";
import questionSvg from '@/assets/question.svg'
import './quiz-question.scss'


const QuizQuestion = ({ type, title, description, image, options }) => {
  return (
    <div className="question">
      <div className="question__title">
        <img className="question__title__icon" src={questionSvg} alt="question logo"/>
        <h1 className="question__title__text">{title}</h1>
      </div>

      <span className="question__description">{description}</span>

      { image.url && (<div className="question__image-container">
          <LazyImg
            url={image.url}
            height={image.height}
            width={image.width}
            alt={image.description}
          />
        </div>
      )}

      <QuizAnswer type={type} options={options} />
    </div>
  )
}

export default QuizQuestion;