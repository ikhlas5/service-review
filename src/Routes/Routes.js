import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"home",
                element:<Home></Home>
            },
            {
                path:"services",
                element:<Service></Service>
            },
            {
                path:"/",
                element:<Home></Home>
            },
        ]
    }
])