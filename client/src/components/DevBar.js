import React, { useContext } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const DevBar = observer(() => {
    const {game} = useContext(Context)
    return (
    <Dropdown>
        <Dropdown.Toggle variant="dark">{game.selectedDev.name || "Разработчик"}</Dropdown.Toggle>
        <Dropdown.Menu>
            {game.devs.map(dev =>
                <Dropdown.Item onClick={() => game.setSelectedDev(dev)} key={dev.id}>{dev.name}</Dropdown.Item>    
            )}
        </Dropdown.Menu>
    </Dropdown>
    );
});

export default DevBar

