const listBoards = (state = { data: [] }, action) => {
  if (action.type === "LIST_BOARDS") {
    return action.payload;
  }
  return state;
};

export default listBoards;
