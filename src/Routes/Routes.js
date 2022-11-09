import { createBrowserRouter } from "react-router-dom";
import Login from "../FromInfo/Login/Login";
import Singup from "../FromInfo/SingUp/Singup";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";

import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails/ServiceDetails";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/home')
            },
            {
                path:"home",
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:5000/home')
            },
            {
                path:"services",
                element:<Service></Service>,
                loader:()=>fetch(`http://localhost:5000/services`)
            },
            {
                path:"services/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
                
            },
            // {
            //     path:"orders",
            //     element:<Orders></Orders>
            // },
            {
                path:"blogs",
                element:<Blogs></Blogs>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"singup",
                element:<Singup></Singup>
            },
        ]
    }
])