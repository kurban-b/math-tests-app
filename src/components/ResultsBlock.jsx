import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRow from "./TableRow";
import { restart } from "../redux/actionss";

function ResultsBlock() {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.name);
  const mathExamples = useSelector((state) => state.mathExamples);
  const answers = useSelector((state) => state.answers);
  const correctAnswers = useSelector((state) => state.correctAnswers);

  const handleClick = () => {
    dispatch(restart());
  };

  return (
    <div>
      <h2 className={"title"}>Молодец, {name}!</h2>
      <h3 className={"subtitle"}>Ваши результаты</h3>
      <div>
        <table className={"result-table"}>
          <thead>
            <tr>
              <th width={"15px"}>№</th>
              <th width={"200px"}>Мат. пример</th>
              <th width={"100px"}>Ваш ответ</th>
              <th width={"150px"}>Правильный ответ</th>
            </tr>
          </thead>
          <tbody>
            {mathExamples.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  mathExample={item}
                  answers={answers}
                  correctAnswers={correctAnswers}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={"result-footer"}>
        <div>Кол-во правильных ответов: {correctAnswers.length}</div>
        <div>
          <button className="btn" onClick={handleClick}>
            Рестарт
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsBlock;
