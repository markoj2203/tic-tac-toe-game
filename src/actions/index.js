export const createPlayerAction = (data) => {
  return {
    type: "CREATE_PLAYER",
    payload: data,
  };
};

export const createBoardAction = (data) => {
  return {
    type: "CREATE_BOARD",
    payload: data,
  };
};

export const listBoardsAction = (data) => {
  return {
    type: "LIST_BOARDS",
    payload: data,
  };
};

export const joinRoomAction = (data) => {
  return {
    type: "JOIN_ROOM",
    payload: data,
  };
};
