import React, { useState, useEffect } from "react";
import DashBoard from "../~reuseables/molecules/DashBooard";
import config from "../../axios";

const GameArea = () => {
  const [gameData, setGameData] = useState([]);

  /**
   * Initializes game and users,
   *@param: none
   */
  const LoadGame = () => {
    config
      .axiosWithAuth()
      .get(`/api/init`)
      .then(res => {
        setGameData(res.data);
      })
      .catch(err => {
        return err.statusText;
      });
  };

  useEffect(LoadGame, []);

  return <DashBoard data={gameData} />;
};

export default GameArea;
