import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import ServiceDetails from "../components/pages/services/ServiceDetails";
import Services from "../components/pages/services/Services";
import Signup from "../components/pages/signUp/signup";
import Main from "../layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/limitedservices')
            }, 
            {
                path:'/login',
                element:<Login></Login>

            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/services',
                element: <Services></Services>,
                loader: ()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    },
    {
        path:'*',
        element:<p>no page found</p>
    }
])

