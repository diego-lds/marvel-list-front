export default (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "GET_LIST_CHARACTERS":
      return payload;
    default:
      return state;
  }
};
