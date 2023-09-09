import React, { useEffect, useState } from "react";
import SubNav1 from "./SubNav1";
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'

const ListPlayers = (props) => {
  const { pageActive, setPageActive, players, setPlayers, setManagePageActive } = props;
  const [show, setShow] = useState(false)
  const [namePlayerToDelete, setNamePlayerToDelete] = useState("")
  const [idPlayerToDelete, setIdPlayerToDelete] = useState()

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    setPageActive("ListPage");
    setManagePageActive(true)
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data)
        setPlayers(res.data)
      })
  }, [setPageActive, setPlayers, setManagePageActive]);

  const handleClickDelete = (playerId, playerName) => {
    setIdPlayerToDelete(playerId)
    setNamePlayerToDelete(playerName)
    setShow(true)
  }

  const deleteOnePlayer = () => {
    axios.delete("http://localhost:5000/api/players/" + idPlayerToDelete)
      .then(res => {
        setPlayers(players.filter(player => player._id !== idPlayerToDelete))
        setShow(false)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <SubNav1 pageActive={pageActive} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Attention !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fw-semibold">{`Are you sure you want to delete this player : ${namePlayerToDelete}`}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteOnePlayer}>
            Ok
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
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
                  <button type="submit" className="btn btn-danger" onClick={ () => handleClickDelete(player._id, player.name) }>Delete</button>
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
