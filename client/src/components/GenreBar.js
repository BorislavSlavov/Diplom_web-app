import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const GenreBar = observer(() => {
    const {game} = useContext(Context)
    return (
        <ListGroup>
            {game.genres.map(genre =>
                <ListGroup.Item 
                    style = {{cursor: 'pointer'}}
                    active = {genre.id === game.selectedGenre.id}
                    onClick = {() => game.setSelectedGenre(genre)}
                    key = {genre.id}
                >
                    {genre.name}
                </ListGroup.Item>    
            )}
        </ListGroup>
    );
});

export default GenreBar