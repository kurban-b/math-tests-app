import React from "react";
import PropTypes from "prop-types";

function ListItem({ qustion, num, answers, setAnswers }) {
  const handleChange = (event) => {
    setAnswers(
      answers.map((answer, index) => {
        if (index === num) {
          return event.target.value;
        }
        return answer;
      })
    );
  };

  return (
    <li>
      <div className={"num"}>{num + 1})</div>
      <div className={"question"}>{qustion.math} = ?</div>
      <div className={"answer"}>
        <input
          type="text"
          placeholder={"ответ"}
          value={answers.find((item, key) => key === num)}
          onChange={handleChange}
        />
      </div>
    </li>
  );
}

ListItem.propTypes = {
  qustion: PropTypes.object.isRequired,
  num: PropTypes.number.isRequired,
  answers: PropTypes.array.isRequired,
  setAnswers: PropTypes.func.isRequired,
};

export default ListItem;
