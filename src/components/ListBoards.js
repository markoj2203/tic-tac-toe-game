import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { createBoardAction } from "../actions";
import { listBoardsAction } from "../actions";
import { joinRoomAction } from "../actions";
import { apiK } from "../apis/getApiKey";
import socketIOClient from "socket.io-client";
const ENDPOINT = `http://178.128.206.150:7000`;

const ListBoards = () => {
  const [chkRoom, setChkRoom] = useState("");
  const dispatch = useDispatch();
  const listBoardsData = useSelector((state) => state.listBoards.data);
  const playerID = useSelector((state) => state.createPlayer.id);

  const chkR = useSelector((state) => state.joinRoom);

  const circleStyle = {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    display: "inline-block",
  };

  useEffect(() => {
    loadBoard();
  }, []);

  const handleClick = async (e) => {
    const newBoard = await axios
      .post(`http://178.128.206.150:7000/create_board`, {
        apikey: apiK,
      })
      .then((res) => {
        return res.data;
      });
    dispatch(createBoardAction({ id: newBoard.id }));
    loadBoard();
  };

  const loadBoard = async () => {
    const dataArr = await axios
      .post(`http://178.128.206.150:7000/boards`, { apikey: apiK })
      .then((res) => {
        return res.data;
      });
    dispatch(listBoardsAction({ data: dataArr }));
  };

  const handleSocket = (boardID, playerID) => {
    //const history = useHistory();
    const socket = socketIOClient(`${ENDPOINT}?id=${playerID}`);
    socket.emit("join_room", boardID, (responseCode) => {
      if (responseCode == "200") {
        setChkRoom({ inRoom: true });
        dispatch(joinRoomAction({ inRoom: true }));
      } else {
        setChkRoom({ inRoom: false });
        dispatch(joinRoomAction({ inRoom: false }));
      }
    });
  };

  return (
    <div>
      <div className="row">
        <div className="column">
          <button onClick={handleClick} className="ui button">
            Create Room
          </button>
        </div>
      </div>
      <br />
      <div className="ui divided three column grid">
        <div className="row">
          {listBoardsData.map((board, index) => (
            <div key={index} className="column">
              <div>
                <div style={circleStyle} className="ui circular segment">
                  <h2 className="ui header">
                    Room {index}
                    <div className="sub header">Players: {board.players}/2</div>
                    <div style={{ paddingTop: "10px" }} className="sub header">
                      {board.players < 2 ? (
                        <button
                          className="ui primary button"
                          title="Go inside the room to play a game!"
                          onClick={() => handleSocket(board.id, playerID)}
                        >
                          Join
                        </button>
                      ) : (
                        <i className="lock large icon"></i>
                      )}
                    </div>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListBoards;
