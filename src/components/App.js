import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import CreatePlayer from "../components/CreatePlayer";
import ListBoards from "./ListBoards";
import PlayGame from "../components/PlayGame";
const ticTac = require("../images/ticTac.png");

const headerT = {
  textAlign: "-webkit-center",
};

const App = () => {
  return (
    <div className="ui container">
      <div style={headerT} className="ui content">
        <h1 className="ui header">
          <div>Tic Tac Toe Game</div>
        </h1>
      </div>

      <Router>
        <div className="ui pointing menu">
          <NavLink className="item" to="/createplayer">
            Create Player
          </NavLink>
          <NavLink className="item" to="/listplayer">
            List Player Boards
          </NavLink>
          <NavLink className="item" to="/playgame">
            Play Game
          </NavLink>
        </div>
        <div className="ui segment">
          <Switch>
            <Route path="/createplayer">
              <CreatePlayer />
            </Route>
            <Route path="/listplayer">
              <ListBoards />
            </Route>
            <Route path="/playgame">
              <PlayGame />
            </Route>
            <Route path="/">
              <CreatePlayer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
