import { React, useEffect, useState, useContext } from "react";
import { Container, Form, Image } from "react-bootstrap";
import './GamePage.css';
import { useParams } from "react-router-dom";
import { fetchOneGame } from "../http/gameAPI";
import Reviews from "../components/Reviews";
import CreateReview from "../components/CreateReview";
import { Context } from "../index";

const GamePage = () => {
  const {games} = useContext(Context)
  const [game, setGame] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneGame(id).then((data) => setGame(data))
  }, [])

  return (
    <Container className="mt-3">
      <div className="game-header">
        <div className="game-header-image">
            <Image src={process.env.REACT_APP_API_URL + game.img}></Image>
        </div>
        <div className="game-header-body">
            <div className="game-header-title-container">
                <div className= "game-header-title">
                    <div className="game-header-title-rating">
                        <Form className="d-flex flex-column align-items-center">
                            <div
                            className="rating-circle"
                            >
                            {game.rating}
                            </div>
                        </Form>
                    </div>
                    <div className="game-header-title-info">
                        <h1>{game.name}({game.release_date})</h1>
                        <div>{game.brief}</div>
                        <div className = "credits mt-3">
                        <ul>
                            <li>
                                <strong>{game.playersQuant} </strong>
                                игроков
                            </li>
                            <li>
                                <strong>{game.playingTime} минут </strong>
                                игрового времени
                            </li>
                            <li>
                                <strong>Цена: </strong>
                                {game.price} рублей
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
      <div className="panel panel-top">
        <div className="panel-header panel-header-lg">
            <h3 className="panel-title">Описание</h3>
        </div>
      </div>
      <div className="panel-body">{game.game_description}</div>

      <div className="panel panel-top mt-5">
        <div className="panel-header panel-header-lg">
            <h3 className="panel-title">Комплектация</h3>
        </div>
      </div>
      <div>
        {game.info.map((info, index) => (
          <li key={info.id}>
            {info.title}: {info.description};
          </li>
        ))}
      </div>
      <div className="panel panel-top mt-5">
        <div className="panel-header panel-header-lg">
            <h3 className="panel-title">Отзывы</h3>
        </div>
      </div>
      <CreateReview/>
      <Reviews gameId={id}/>
    </Container>  
  );
};

export default GamePage;

