import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SubNav2 from "./SubNav2";
import axios from "axios";

const PlayerStatus = (props) => {
  const { setManagePageActive, players, setPlayers } = props;
  const { gameId } = useParams();
  const [refreshPage, setRefreshPage] = useState(false)

  useEffect(() => {
    setManagePageActive(false);
  }, [setManagePageActive]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        setPlayers(res.data)
      })
  }, [setPlayers, refreshPage]);

  const handleChangeStatus = (playerId, newStatus) => {
    let putData = {}
    if (gameId === "1") {
      putData.gameOneStatus = newStatus
    } else if (gameId === "2") {
      putData.gameTwoStatus = newStatus
    } else {
      putData.gameThreeStatus = newStatus
    }
    axios
      .put("http://localhost:5000/api/players/" + playerId, putData)
      .then((res) => {
        console.log(res)
        setRefreshPage(!refreshPage)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SubNav2 gameId={gameId} />
      <table className="table table-light table-striped table-hover text text-center mt-3 border">
        <thead>
          <tr>
            <th className="border">Player Name</th>
            <th className="border" colSpan="3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/*=============CONDITIONAL RENDER FOR gameOneStatus================*/}
          {gameId === "1" ? (
            players.map((player, i) => (
              <tr key={i}>
                <td className="text-start border">{player.name}</td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameOneStatus === "Playing"
                        ? "btn btn-success"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Playing")}
                  >
                    Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameOneStatus === "Not Playing"
                        ? "btn btn-danger"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Not Playing")}
                  >
                    Not Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameOneStatus === "Undecided"
                        ? "btn btn-warning"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Undecided")}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : <></>}
          {/*=============CONDITIONAL RENDER FOR gameTwoStatus================*/}
          {gameId === "2" ? (
            players.map((player, i) => (
              <tr key={i}>
                <td className="text-start border">{player.name}</td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameTwoStatus === "Playing"
                        ? "btn btn-success"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Playing")}
                  >
                    Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameTwoStatus === "Not Playing"
                        ? "btn btn-danger"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Not Playing")}
                  >
                    Not Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameTwoStatus === "Undecided"
                        ? "btn btn-warning"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Undecided")}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : <></>}
          {/*=============CONDITIONAL RENDER FOR gameThreeStatus================*/}
          {gameId === "3" ? (
            players.map((player, i) => (
              <tr key={i}>
                <td className="text-start border">{player.name}</td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameThreeStatus === "Playing"
                        ? "btn btn-success"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Playing")}
                  >
                    Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameThreeStatus === "Not Playing"
                        ? "btn btn-danger"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Not Playing")}
                  >
                    Not Playing
                  </button>
                </td>
                <td className="border">
                  <button
                    type="submit"
                    className={`${
                      player.gameThreeStatus === "Undecided"
                        ? "btn btn-warning"
                        : "btn"
                    }`}
                    onClick={() => handleChangeStatus(player._id, "Undecided")}
                  >
                    Undecided
                  </button>
                </td>
              </tr>
            ))
          ) : <></>}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatus;
