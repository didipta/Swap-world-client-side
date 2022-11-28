import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs.js/Blogs";
import About from "../Commonpage/About";
import Error from "../Commonpage/Error";
import Login from "../Commonpage/Login";
import Profile from "../Commonpage/Profile";
import Singup from "../Commonpage/Singup";
import Allorder from "../Dashboard/Adminpage/Allorder";
import Allseller from "../Dashboard/Adminpage/Allseller";
import Allusershow from "../Dashboard/Adminpage/Allusershow";
import Dashdoardmain from "../Dashboard/Layout/Dashdoardmain";
import Dashdoardseller from "../Dashboard/Layout/Dashdoardseller";
import Addproduct from "../Dashboard/Sellerpage/Addproduct";
import Allproductshow from "../Dashboard/Sellerpage/Allproductshow";
import Mybuyer from "../Dashboard/Sellerpage/Mybuyer";
import Myproduct from "../Dashboard/Sellerpage/Myproduct";
import Orderdetails from "../Dashboard/Sellerpage/Orderdetails";
import Main from "../Layout/Main";
import Myorderpage from "../Orderpage/Myorderpage";
import Wishpage from "../Orderpage/Wishpage";
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
                loader: ({params}) => fetch(`https://swap-world-server-site.vercel.app/productallshow/${params.id}`,
                {
                    headers: {
                      authorization: `bearer ${localStorage.getItem('swapworldToken')}`
                  }
                }
                )
            },
            {
                path:"/Myorder",
                element:<Privetrouter><Myorderpage></Myorderpage></Privetrouter>,
            },
            {
                path:"/MyWishlist",
                element:<Privetrouter><Wishpage></Wishpage></Privetrouter>,
            },
            {
                path:"/About",
                element:<About></About>

            }
            ,
            {
                path:"/profile",
                element:<Privetrouter><Profile></Profile></Privetrouter>
            }
            ,
            {
                path:"/Blogs",
                element:<Blogs></Blogs>

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
            ,
            {
                path:"/Dashboard/allproduct",
                element:<Allproductshow></Allproductshow>
            }
            ,
            {
                path:"/Dashboard/allorder",
                element:<Allorder></Allorder>
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
            ,
            {
                path:"/SellerDashboard/mybuyer",
                element:<Mybuyer></Mybuyer>
            }
            ,
            {
                path:"/SellerDashboard/myproductorder",
                element:<Orderdetails></Orderdetails>
            }
            
        ]
    }
])