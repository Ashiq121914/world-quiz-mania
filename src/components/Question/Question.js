import React from "react";

const Question = ({ id, question }) => {
  return (
    <div>
      <label>
        <input type="radio" value="male" name="question" />
        {question}
      </label>
    </div>
  );
};

export default Question;
