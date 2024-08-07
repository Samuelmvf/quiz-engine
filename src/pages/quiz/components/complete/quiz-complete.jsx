import './quiz-complete.scss'
import Button from "@/components/button/button.jsx";

const QuizComplete = ({ handleResetQuiz }) => {
  return (
    <section className="section-complete">
      <h1 className="section-complete__title">Thanks for participating</h1>
      <p className="section-complete__description">May your experience with the app be enjoyable and fulfilling!</p>
      <Button text="Back to start" type="button" onClick={handleResetQuiz} />
    </section>
  );
}

export default QuizComplete;