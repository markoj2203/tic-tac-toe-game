const createPlayer = (state = { id: "", name: "" }, action) => {
  if (action.type === "CREATE_PLAYER") {
    return action.payload;
  }
  return state;
};

export default createPlayer;
