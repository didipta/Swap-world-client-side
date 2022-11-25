import { createBrowserRouter } from "react-router-dom";
import Error from "../Commonpage/Error";
import Login from "../Commonpage/Login";
import Singup from "../Commonpage/Singup";
import Allseller from "../Dashboard/Adminpage/Allseller";
import Allusershow from "../Dashboard/Adminpage/Allusershow";
import Dashdoardmain from "../Dashboard/Layout/Dashdoardmain";
import Dashdoardseller from "../Dashboard/Layout/Dashdoardseller";
import Addproduct from "../Dashboard/Sellerpage/Addproduct";
import Allproductshow from "../Dashboard/Sellerpage/Allproductshow";
import Myproduct from "../Dashboard/Sellerpage/Myproduct";
import Main from "../Layout/Main";
import Home from "../Page/Home";
import Productshow from "../Product/Productshow";
import Adminroute from "./Adminroute";
import Privetrouter from "./Privetrouter";
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
            },
            {
                path:"/category/:id",
                element:<Privetrouter><Productshow></Productshow></Privetrouter>,
                loader: ({params}) => fetch(`https://swap-world-server-site.vercel.app/productallshow/${params.id}`)
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
            ,
            {
                path:"/Dashboard/allseller",
                element:<Allseller></Allseller>
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
                path:"/SellerDashboard/addproduct",
                element:<Addproduct></Addproduct>
            }
            ,
            {
                path:"/SellerDashboard/allproduct",
                element:<Allproductshow></Allproductshow>
            }
            ,
            {
                path:"/SellerDashboard/myproduct",
                element:<Myproduct></Myproduct>
            }
            
        ]
    }
])