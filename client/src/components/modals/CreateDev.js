import {React, useState } from "react";
import {Modal, Form, Button } from "react-bootstrap";
import { createDev } from "../../http/gameAPI";

const CreateDev = ({show, onHide}) => {
    const [value, setValue] = useState('')
    
    const addDev = () => {
        createDev({name: value}).then(data => {
            setValue('')
            onHide()
        })
        window.location.reload()
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
                Добавить разработчика
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder={"Введите название разработчика"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            <Button variant="outline-success" onClick={addDev}>Добавить</Button>
        </Modal.Footer>
    </Modal>
    );
};

export default CreateDev