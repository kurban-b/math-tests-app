export const addName = (name) => {
  return {
    type: "name/add",
    payload: name,
  };
};

export const addAnswers = (answers) => {
  return {
    type: "answers/add",
    payload: answers,
  };
};

export const restart = () => {
  return {
    type: "restart",
  };
};
