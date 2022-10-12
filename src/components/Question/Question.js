import "./Question.css";

const Question = ({ question, getData }) => {
  const handleSubmit = (userAns) => {
    getData(userAns);
  };

  return (
    <div>
      <div className="options">
        <label>
          <input
            type="radio"
            value={question}
            name="question"
            onClick={(ans) => handleSubmit(ans.target.value)}
          />

          {question}
        </label>
      </div>
    </div>
  );
};

export default Question;
