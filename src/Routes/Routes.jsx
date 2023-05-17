import { createBrowserRouter } from "react-router-dom";
import HomeOutlet from "../HomeOutlet/HomeOutlet";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage";
import Main from "../layouts/Main";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <HomeOutlet></HomeOutlet>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '*',
            element: <ErrorPage></ErrorPage>
        }
      ]
    },
  ]);