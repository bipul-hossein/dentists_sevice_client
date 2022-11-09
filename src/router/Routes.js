import { createBrowserRouter } from "react-router-dom";
import AddService from "../components/pages/addService/AddService";
import Blogs from "../components/pages/Blogs/Blogs";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/login/Login";
import EditReviews from "../components/pages/myReveiws/EditReviews";
import MyReviews from "../components/pages/myReveiws/MyReviews";
import ServiceDetails from "../components/pages/services/ServiceDetails";
import Services from "../components/pages/services/Services";
import Signup from "../components/pages/signUp/signup";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('https://assignment11-server-two.vercel.app/limitedservices')
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
                loader: ()=>fetch('https://assignment11-server-two.vercel.app/services')
            },
            {
                path:'/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({params})=>fetch(`https://assignment11-server-two.vercel.app/services/${params.id}`)
            },
            {
                path:'/myreviews',
                element: <MyReviews></MyReviews>,
            },
            {
                path:'/review/edit/:id',
                element: <EditReviews></EditReviews>,
            },
            {
                path:'/add_service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
            },
            {
                path:'/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>,
            },
        ]
    },
    {
        path:'*',
        element:<p>no page found</p>
    }
])

