import createPlayer from "./createPlayerReducer";
import getPlayer from "./getPlayerReducer";
import createBoard from "./createBoardReducer";
import listBoards from "./listBoardsReducer";
import joinRoom from "./joinRoomReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  createPlayer: createPlayer,
  getPlayer: getPlayer,
  createBoard: createBoard,
  listBoards: listBoards,
  joinRoom: joinRoom,
});

export default allReducers;
