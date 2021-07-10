import React from "react";
import PropTypes from "prop-types";

function TableRow({ mathExample, answers, correctAnswers }) {
  const isCorrectAnswer = correctAnswers.some(
    (item) => item.id === mathExample.id
  );

  return (
    <tr className={isCorrectAnswer ? "correct-answer" : "not-correct-answer"}>
      <td>{mathExample.id + 1}</td>
      <td>{mathExample.math}</td>
      <td>{answers.find((answer, index) => index === mathExample.id)}</td>
      <td>{Math.round(eval(mathExample.math) * 100) / 100}</td>
    </tr>
  );
}

TableRow.propTypes = {
  mathExample: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  correctAnswers: PropTypes.array.isRequired,
};

export default TableRow;
