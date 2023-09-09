import React, { useEffect, useState } from "react";
import SubNav1 from "./SubNav1";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddPlayer = (props) => {
  const {
    pageActive,
    setPageActive,
    players,
    setPlayers,
    setManagePageActive,
  } = props;
  const [name, setName] = useState("");
  const [preferredPosition, setPreferredPosition] = useState("");
  //Create an array to store errors from the API
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setPageActive("AddPage");
    setManagePageActive(true);
  }, [setPageActive, setManagePageActive]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //make a post request to create a new author
    axios
      .post("http://localhost:5000/api/players", {
        name,
        preferredPosition,
      })
      .then((res) => {
        console.log(res.data);
        setPlayers([...players, res.data]);
        navigate('/')
      })
      .catch((err) => {
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <SubNav1 pageActive={pageActive} />
      <h3 className="mt-5">Add Player</h3>
      <form onSubmit={onSubmitHandler} className="border p-5 mt-3">
        <div className="container w-75 mb-3">
          <label className="form-label fw-bold">Name:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name ? (
            <p className="ms-3 text-danger">* {errors.name.message}</p>
          ) : null}
        </div>
        <div className="container w-75 mb-5">
          <label className="form-label fw-bold">Preferred Position:</label>
          <input
            type="text"
            className="form-control"
            value={preferredPosition}
            onChange={(e) => setPreferredPosition(e.target.value)}
          />
          {errors.preferredPositione ? (
            <p className="ms-3 text-danger">
              * {errors.preferredPositione.message}
            </p>
          ) : null}
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="submit"
            className="btn btn-primary me-5"
            onClick={handleClick}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlayer;
