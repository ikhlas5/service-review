import { createBrowserRouter } from "react-router-dom";
import Login from "../FromInfo/Login/Login";
import Singup from "../FromInfo/SingUp/Singup";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import AddService from "../Pages/Review/AddServices/AddService";
import Review from "../Pages/Review/Review";

import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails/ServiceDetails";
// import PrivateRoute from "./PrivateRoute/PrivateRoute";


export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('https://service-review-75d6b.web.app/home')
            },
            {
                path:"home",
                element:<Home></Home>,
                loader:()=>fetch('https://service-review-75d6b.web.app/home')
            },
            {
                path:"services",
                element:<Service></Service>,
                loader:()=>fetch(`https://service-review-75d6b.web.app/services`)
            },
            {
                path:"services/:id",
                element:<ServiceDetails></ServiceDetails>,
                loader:({params})=>fetch(`https://service-review-75d6b.web.app/services/${params.id}`)
                
            },
            {
                path:"review",
                element:<Review></Review>
            },
            {
                path:"addService",
                element:<AddService></AddService>
            },
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