import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createPlayerAction } from "../actions";
import { apiK } from "../apis/getApiKey";

const CreatePlayer = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const hendleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerData = await axios
      .post(`http://178.128.206.150:7000/player`, {
        name: name,
        apikey: apiK,
      })
      .then((res) => {
        return res.data;
      });
    dispatch(createPlayerAction({ id: playerData.id, name: playerData.name }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Create User Name:</label>
          <input
            type="text"
            name="name"
            onChange={hendleChange}
            placeholder="Type user name..."
          />
        </div>
        <button type="submit" className="ui button">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePlayer;
