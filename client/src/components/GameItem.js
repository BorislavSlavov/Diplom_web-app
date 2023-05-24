import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { GAME_ROUTE } from "../utils/consts";

const GameItem = ({game}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className={"mt-3"} onClick={() => navigate(GAME_ROUTE + '/' + game.id)}>
            <Card style={{width: 150,cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + game.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{game.price} руб.</div>
                    <div className="d-flex align-items-center">
                        <div>{game.rating}</div>
                        <Image className={"ms-1"} width={14} height={13} src={star}/>
                    </div>
                </div>
                <div>{game.name}</div>
            </Card>
        </Col>
    );
};

export default GameItem