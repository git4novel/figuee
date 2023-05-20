import { Navigate, createBrowserRouter } from "react-router-dom";
import HomeOutlet from "../HomeOutlet/HomeOutlet";
import Login from "../Login/Login";
import Register from "../Register/Register";
import ErrorPage from "../ErrorPage";
import Main from "../layouts/Main";
import Blog from "../Blog/Blog";
import AddAToy from "../layouts/AddAToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPageLayout from "../layouts/ErrorPageLayout";
import MyToy from "../MyToy/MyToy";
import UpdateAToy from "../MyToy/UpdateAToy";


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
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: 'mytoy', 
          element: <MyToy></MyToy>,
          loader: () => fetch('http://localhost:5000/mytoy')
        },
        {
          path: 'update/:id',
          element: <UpdateAToy></UpdateAToy>,
          loader: ({params}) => fetch('')
        },
        {
            path: '*',
            element: <Navigate to={'/error'}></Navigate>
        }
      ]
    },
    {
      path: '/addAToy',
      element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
    },
    {
      path: '/error',
      element: <ErrorPageLayout></ErrorPageLayout>
    }
  ]);