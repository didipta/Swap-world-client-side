import { createBrowserRouter } from "react-router-dom";
import Error from "../Commonpage/Error";
import Login from "../Commonpage/Login";
import Singup from "../Commonpage/Singup";
import Main from "../Layout/Main";

export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"Loginpage",
                element:<Login></Login>
            },
            {
                path:"Signuppage",
                element:<Singup></Singup>
            }
        ]
    }
])