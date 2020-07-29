const createBoard = (state = { id: "" }, action) => {
  if (action.type === "CREATE_BOARD") {
    return action.payload;
  }
  return state;
};

export default createBoard;
