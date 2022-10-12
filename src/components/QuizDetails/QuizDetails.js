import Question from "../Question/Question";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BeakerIcon, EyeIcon } from "@heroicons/react/24/solid";
import "./QuizDetails.css";

const QuizDetails = ({ question, idx }) => {
  const options = question.options;
  const correctAns = question.correctAnswer;
  const questionName = question.question;

  const getData = (userAns) => {
    if (userAns === correctAns) {
      toast("correct");
    } else {
      toast("incorrect");
    }
  };

  const showAns = () => {
    toast(correctAns);
  };
  return (
    <div className="">
      <div className="bg-dark  text-white  Qcard">
        <h3 className="d-inline">
          Quiz-{idx + 1}:{questionName}
        </h3>
        <small>
          <EyeIcon onClick={showAns} className="ansIcon" />
        </small>
        <ToastContainer limit={1} autoClose={700} />

        {options.map((option, idx) => {
          return (
            <Question
              key={idx}
              question={option}
              correctAns={correctAns}
              getData={getData}
            ></Question>
          );
        })}
      </div>
    </div>
  );
};

export default QuizDetails;
