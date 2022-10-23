import { createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Main from "../../pages/Main/Main";
import News from "../../pages/News/News";
import Opportunites from "../../pages/Opportunities/Opportunites";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/news',
                element: <PrivateRoute><News></News></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/opportunities',
                element: <PrivateRoute><Opportunites></Opportunites></PrivateRoute>
            }

        ]
    }
])