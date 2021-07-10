import { randomMathExamples } from "../features";

const initialState = {
  name: "",
  mathExamples: randomMathExamples(),
  answers: [],
  correctAnswers: [],
};

export const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "name/add":
      return {
        ...state,
        name: action.payload,
      };
    case "answers/add":
      return {
        ...state,
        answers: action.payload,
        correctAnswers: state.mathExamples.filter((item, index) => {
          const userAnswer = +action.payload.find(
            (answer, key) => key === index
          );
          return Math.round(eval(item.math) * 100) / 100 === userAnswer;
        }),
      };
    case "restart":
      return {
        ...state,
        name: "",
        mathExamples: randomMathExamples(),
        answers: [],
        correctAnswers: [],
      };
    default:
      return state;
  }
};
