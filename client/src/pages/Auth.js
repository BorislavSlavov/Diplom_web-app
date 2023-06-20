import { observer } from "mobx-react-lite";
import {React, useContext, useState } from "react";
import { Button, Card, Container, Form, FormControl} from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Context } from "..";
import { login, registration } from "../http/userAPI";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "../utils/consts";


const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigation = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
 
    const click = async () => {
        try{
            let data;
            if (isLogin) {
                data = await login(email, password);
            }
            else {
                data = await registration(email, password);
            }   
            user.setUser(data)
            user.setIsAuth(true)
            navigation(MAIN_ROUTE)
            window.location.reload()
        } catch(e) {
            alert(e.response.data.message)
        }
        
    }

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style = {{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <FormControl
                        className="mt-3"
                        placeholder="Введите логин..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <FormControl
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Form className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                            :
                            <div>
                                <NavLink to={LOGIN_ROUTE}>Авторизация</NavLink>
                            </div>
                        }
                        <Button 
                            variant={"outline-dark"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Form>  
                </Form>
            </Card>
        </Container>
    );
});

export default Auth