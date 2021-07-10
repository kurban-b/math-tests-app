import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../redux/actionss";

function StartForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    dispatch(addName(name));
  };

  return (
    <div className={"start-form"}>
      <h2>СТАРТ</h2>
      <h3>Введите Ваше имя</h3>
      <input
        type="text"
        placeholder={"Имя"}
        value={name}
        onChange={handleChange}
      />
      <button
        className={"btn"}
        disabled={name.length === 0}
        onClick={handleClick}
      >
        Начать
      </button>
    </div>
  );
}

export default StartForm;
