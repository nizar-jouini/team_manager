import React, { useEffect } from "react";
import SubNav1 from "./SubNav1";
import axios from 'axios'


const ListPlayers = (props) => {
  const { pageActive, setPageActive, players, setPlayers, setManagePageActive } = props;

  useEffect(() => {
    setPageActive("ListPage");
    setManagePageActive(true)
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        setPlayers(res.data)
      })
  }, [setPageActive, setPlayers, setManagePageActive]);

  const deleteOnePlayer = (playerId) => {
    axios.delete("http://localhost:5000/api/players/" + playerId)
      .then(res => {
        setPlayers(players.filter(player => player._id !== playerId))
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <SubNav1 pageActive={pageActive} />
      <table className="table table-light table-striped table-hover text text-center mt-3 border">
          <thead>
            <tr>
              <th className='border'>Player Name</th>
              <th className='border'>Preferred Position</th>
              <th className='border'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              players.map((player, i) => (
                <tr key={i}>
                  <td className='text-start border'>{ player.name }</td>
                  <td className='text-start border'>{ player.preferredPosition }</td>
                  <td className='border'>
                  <button type="submit" className="btn btn-danger" onClick={ () => deleteOnePlayer(player._id) }>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
    </div>
  );
};

export default ListPlayers;
