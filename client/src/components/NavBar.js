import React, { useContext } from "react";
import { Context } from "../index";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE,PROFILE_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import {Button, Container} from "react-bootstrap";
import { observer } from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {CgProfile} from "react-icons/cg"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    
    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.removeItem('token') // new
    }
    
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
        <NavLink style={{color:'white'}} to = {SHOP_ROUTE}>BoardGames</NavLink>
        {user.isAuth ?
            <Nav className="ms-auto" style={{color:'white'}}>
                <CgProfile 
                className="m-3"
                cursor= 'pointer'
                onClick={() => navigate(PROFILE_ROUTE)}
                >
                </CgProfile>
                <Button 
                  variant={"outline-light"} 
                  onClick={() => navigate(ADMIN_ROUTE)}
                  >
                    Панель админа
                  </Button>
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