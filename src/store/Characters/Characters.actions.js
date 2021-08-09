const getAllCharacters = () => {
  return {
    type: "GET_LIST_CHARACTERS",
    payload: ["char 1", "char 2"],
  };
};
