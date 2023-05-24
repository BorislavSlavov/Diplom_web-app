import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import GamePage from "./pages/GamePage"
import Profile from "./pages/Profile"
import Shop from "./pages/Shop"
import { ADMIN_ROUTE, GAME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
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