import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import GamePage from "./pages/GamePage"
import Main from "./pages/Main"
import { ADMIN_ROUTE, GAME_ROUTE, LOGIN_ROUTE, CHESS_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE } from "./utils/consts"
import ChessPage from "./pages/ChessPage"
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CHESS_ROUTE,
        Component: ChessPage
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: GAME_ROUTE + '/:id',
        Component: GamePage
    },
]