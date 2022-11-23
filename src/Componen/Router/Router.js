import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
            }
        ]
    }
])