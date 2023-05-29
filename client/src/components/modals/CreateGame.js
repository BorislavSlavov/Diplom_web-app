import { observer } from "mobx-react-lite";
import {React, useContext, useEffect, useState } from "react";
import {Modal, Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { Context } from "../..";
import { createGame, fetchDevs, fetchGenres } from "../../http/gameAPI";

const CreateGame = observer(({show, onHide}) => {
    const {game} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState()
    const [rating, setRating] = useState()
    const [file, setFile] = useState(null)
    const [game_description, setDescription] = useState('')
    const [playersQuant, setPlayersQuant] = useState('')
    const [playingTime, setPlayingTime] = useState('')
    const [brief, setBrief] = useState('')
    const [release_date, setRelease_date] = useState('')
    const [info, setInfo] = useState([])
    
    useEffect(() =>{
        fetchGenres().then(data => game.setGenres(data))
        fetchDevs().then(data => game.setDevs(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addGame = () => {
        
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('rating', `${rating}`)
        formData.append('img', file)
        formData.append('game_description', game_description)
        formData.append('playersQuant', playersQuant)
        formData.append('playingTime', playingTime)
        formData.append('brief', brief)
        formData.append('release_date', release_date)
        formData.append('devId', game.selectedDev.id)
        formData.append('genreId', game.selectedGenre.id)
        formData.append('info', JSON.stringify(info))

        createGame(formData).then(data => onHide())
        console.log(info)
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }
    
    return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Добавить игру
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown className="mt-2 mb-2">
                    <Dropdown.Toggle>{game.selectedGenre.name || "Выберите жанр"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {game.genres.map(genre =>
                            <Dropdown.Item onClick={() => game.setSelectedGenre(genre)} key={genre.id}>{genre.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle>{game.selectedDev.name || "Выберите разработчика"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {game.devs.map(dev =>
                            <Dropdown.Item onClick={() => game.setSelectedDev(dev)} key={dev.id}>{dev.name}</Dropdown.Item>    
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-3"
                    placeholder="Введите название игры "
                />
                <Form.Control
                    as="textarea"
                    value={brief}
                    onChange={e => setBrief(e.target.value)}
                    className="mt-3"
                    placeholder="Введите краткую информацию игры "
                />
                <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className="mt-3"
                    placeholder="Введите стоимость игры "
                    type="number"
                />
                <Form.Control
                    value={rating}
                    onChange={e => setRating(Number(e.target.value))}
                    className="mt-3"
                    placeholder="Введите оценку игры "
                    type="number"
                />
                <Form.Control
                    as="textarea"
                    value={game_description}
                    onChange={e => setDescription(e.target.value)}
                    className="mt-3"
                    placeholder="Введите описание игры "
                />
                <Form.Control
                    value={playersQuant}
                    onChange={e => setPlayersQuant(e.target.value)}
                    className="mt-3"
                    placeholder="Введите кол-во игроков "
                />
                <Form.Control
                    value={playingTime}
                    onChange={e => setPlayingTime(e.target.value)}
                    className="mt-3"
                    placeholder="Введите время игры "
                />
                <Form.Control
                    value={release_date}
                    onChange={e => setRelease_date(e.target.value)}
                    className="mt-3"
                    placeholder="Введите дату выхода игры "
                    type="date"
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
                />
                <hr/>
                <Button
                    variant={"outline-dark"} 
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название комплектации"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите количество комплектации"
                                />
                            </Col>
                            <Col md={4}>
                                <Button 
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addGame}>Добавить</Button>
        </Modal.Footer>
    </Modal>
    );
});

export default CreateGame