import { createBrowserRouter } from "react-router-dom";
import Error from "../Commonpage/Error";
import Login from "../Commonpage/Login";
import Singup from "../Commonpage/Singup";
import Dashdoardmain from "../Dashboard/Layout/Dashdoardmain";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import Adminsellerroute from "./Adminsellerroute";

export const routers=createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
               path:"/",
               element:<Home></Home>
            },
            {
               path:"/home",
               element:<Home></Home>
            },
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
    ,
    {
        path:"/Dashboard",
        element:<Adminsellerroute><Dashdoardmain></Dashdoardmain></Adminsellerroute>,
        errorElement:<Error></Error>,
        children:[
            
        ]
    }
])