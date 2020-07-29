const getPlayer = (state = {}, action) => {
  if (action.type === "GET_PLAYER") {
    return action.payload;
  }
  return state;
};

export default getPlayer;
