import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookingService from "../Pages/BookingService/BookingService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'about',
            element: <About></About>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path: 'book/:id',
            element: <PrivateRoute><BookingService></BookingService></PrivateRoute>,
            loader: ({params}) => fetch(` https://car-servicing-server-ivory.vercel.app/services/${params.id}`)
        },
        {
            path: 'bookings',
            element: <PrivateRoute> <Bookings></Bookings></PrivateRoute>,
        },
      ]
    },
  ]);


  export default router;