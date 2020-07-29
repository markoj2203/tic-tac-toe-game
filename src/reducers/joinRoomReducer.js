const joinRoom = (state = "", action) => {
  if (action.type === "JOIN_ROOM") {
    return action.payload;
  }
  return state;
};

export default joinRoom;
