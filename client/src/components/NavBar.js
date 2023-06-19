import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE,CHESS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {FaChess, FaTools} from "react-icons/fa"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token') // new
      window.location.reload() 
    }
    
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white'}} to = {MAIN_ROUTE}>BoardGames</NavLink>
          {user.isAuth ?
            <Nav className="ms-auto" style={{color:'white'}}>
                <FaChess 
                className="m-3"
                cursor= 'pointer'
                onClick={() => navigate(CHESS_ROUTE)}
                >
                </FaChess>
                <FaTools
                  className="m-3"
                  cursor= 'pointer'
                  onClick={() => navigate(ADMIN_ROUTE)}
                >
                </FaTools>
                <Button 
                  variant={"outline-light"} 
                  onClick={() => logOut()} 
                  className = "ms-2"
                  >Выйти
                </Button>
            </Nav>
            :
            <Nav className="ms-auto" style={{color:'white'}}>
                <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
            </Nav>
          }
        </Container>
      </Navbar>
    );
});

export default NavBar