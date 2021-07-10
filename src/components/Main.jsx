import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "./List-Item";
import { addAnswers } from "../redux/actionss";
import { useHistory } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();

  const mathExamples = useSelector((state) => state.mathExamples);

  const history = useHistory();

  const [answers, setAnswers] = useState(mathExamples.map((item) => ""));

  const handleClick = () => {
    if (answers.some((item) => item === "")) {
      return;
    }
    dispatch(addAnswers(answers));
    history.push("/result");
  };

  return (
    <div className={"main"}>
      <p className={"subtitle"}>
        Ответы с дяситичные дробями пишутся с двумя знаками после запятой
      </p>
      <ul className={"questions-list"}>
        {mathExamples.map((item) => {
          return (
            <ListItem
              key={item.id}
              qustion={item}
              num={item.id}
              answers={answers}
              setAnswers={setAnswers}
            />
          );
        })}
      </ul>
      <div className={"main-btn-wrap"}>
        <button
          className={"btn"}
          onClick={handleClick}
          disabled={answers.some((item) => item === "")}
        >
          Далее
        </button>
      </div>
    </div>
  );
}

export default Main;
