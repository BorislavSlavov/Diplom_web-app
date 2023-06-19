import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateGame from "../components/modals/CreateGame";
import CreateGenre from "../components/modals/CreateGenre";
import CreateDev from "../components/modals/CreateDev";

const Admin = () => {
  const [devVisible, setDevVisible] = useState(false);
  const [genreVisible, setGenreVisible] = useState(false);
  const [gameVisible, setGameVisible] = useState(false);

  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="d-flex flex-column">
        <Button onClick={() => setGenreVisible(true)} variant="outline-dark" className="btn-block mb-3">
          Добавить жанр
        </Button>
        <Button onClick={() => setDevVisible(true)} variant="outline-dark" className="btn-block mb-3">
          Добавить разработчика
        </Button>
        <Button onClick={() => setGameVisible(true)} variant="outline-dark" className="btn-block mb-3">
          Добавить игру
        </Button>
      </div>
      <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)} />
      <CreateDev show={devVisible} onHide={() => setDevVisible(false)} />
      <CreateGame show={gameVisible} onHide={() => setGameVisible(false)} />
    </div>
  );
};

export default Admin;
