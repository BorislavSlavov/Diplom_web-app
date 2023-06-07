import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import GameItem from "./GameItem";
import './GameList.css';

const GameList = observer(() => {
    const { game } = useContext(Context)
    const BoardGames = game.games



    return (
        <div className="game-list-container">
            <div className="form">
                <form className="search_form">
                    <input
                        type="text"
                        placeholder="Введите название игры..."
                        className="search_input"
                        onChange={(event) => game.setSearchQuery(event.target.value)}
                    />
                </form>
            </div>
            <Row className="d-flex mt-2">
                {BoardGames.map(game =>
                    <GameItem key={game.id} game={game} />
                )}
            </Row>
        </div>
    );
});

export default GameList