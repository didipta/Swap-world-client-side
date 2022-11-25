import { createBrowserRouter } from "react-router-dom";
import Error from "../Commonpage/Error";
import Login from "../Commonpage/Login";
import Singup from "../Commonpage/Singup";
import Allusershow from "../Dashboard/Adminpage/Allusershow";
import Dashdoardmain from "../Dashboard/Layout/Dashdoardmain";
import Dashdoardseller from "../Dashboard/Layout/Dashdoardseller";
import Addproduct from "../Dashboard/Sellerpage/Addproduct";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import Adminroute from "./Adminroute";
import Sellerroute from "./Sellerroute";

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
        element:<Adminroute><Dashdoardmain></Dashdoardmain></Adminroute>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/Dashboard",
                element:<Allusershow></Allusershow>
            }
            ,
            {
                path:"/Dashboard/alluser",
                element:<Allusershow></Allusershow>
            }
            
        ]
    }
    ,
    {
        path:"/SellerDashboard",
        element:<Sellerroute><Dashdoardseller></Dashdoardseller></Sellerroute>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/SellerDashboard",
                element:<Addproduct></Addproduct>
            }
            ,
            {
                path:"/SellerDashboard/alluser",
                element:<Addproduct></Addproduct>
            }
            
        ]
    }
])