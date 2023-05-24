import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateGame from "../components/modals/CreateGame";
import CreateGenre from "../components/modals/CreateGenre";
import CreateDev from "../components/modals/CreateDev";

const Admin = () => {
    const [devVisible, setDevVisible] = useState(false)
    const [genreVisible, setGenreVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setGenreVisible(true)} variant={"outline-dark"} className="mt-4 p-2">Добавить жанр</Button>
            <Button onClick={() => setDevVisible(true)} variant={"outline-dark"} className="mt-4 p-2">Добавить разработчика</Button>
            <Button onClick={() => setGameVisible(true)} variant={"outline-dark"} className="mt-4 p-2">Добавить игру</Button>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateDev show={devVisible} onHide={() => setDevVisible(false)}/>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
        </Container>
    );
};

export default Admin