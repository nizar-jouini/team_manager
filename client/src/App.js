import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ListPlayers from "./components/ListPlayers";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";
import PlayerStatus from "./components/PlayerStatus";
import Nav from "./components/Nav";

function App() {
  const [pageActive, setPageActive] = useState("");
  const [players, setPlayers] = useState([]);
  const [managePageActive, setManagePageActive] = useState(true);

  return (
    <div className="container">
      <Nav managePageActive={managePageActive} />
      <Routes>
        <Route path="/" element={<Navigate to="/players/list" />} />
        <Route
          path="/players/list"
          element={
            <ListPlayers
              pageActive={pageActive}
              setPageActive={setPageActive}
              players={players}
              setPlayers={setPlayers}
              setManagePageActive={setManagePageActive}
            />
          }
        />
        <Route
          path="/players/addplayer"
          element={
            <AddPlayer
              pageActive={pageActive}
              setPageActive={setPageActive}
              players={players}
              setPlayers={setPlayers}
              setManagePageActive={setManagePageActive}
            />
          }
        />
        <Route
          path="/status/game/:gameId"
          element={
            <PlayerStatus
              setManagePageActive={setManagePageActive}
              players={players}
              setPlayers={setPlayers}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
