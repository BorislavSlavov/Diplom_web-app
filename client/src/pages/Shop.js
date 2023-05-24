import {React, useContext, useEffect } from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import GenreBar from "../components/GenreBar"
import DevBar from "../components/DevBar"
import GameList from "../components/GameList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchGenres, fetchDevs, fetchGames } from "../http/gameAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {
    const {game} = useContext(Context)

    useEffect(() =>{
        fetchGenres().then(data => game.setGenres(data))
        fetchDevs().then(data => game.setDevs(data))
    }, [])

    useEffect(() => {
        fetchGames(game.selectedGenre.id, game.selectedDev.id, game.page, 12).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [game.page, game.selectedGenre, game.selectedDev])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <h4>Настольные игры</h4>
                    <GenreBar/>
                </Col>
                <Col md={9}>
                   
                    <DevBar/> 
                    <Button 
                        onClick={() => window.location.reload()}
                        className="mt-2"
                        variant={"outline-danger"}
                        >
                        Очистить фильтры
                    </Button>    
                    <GameList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop