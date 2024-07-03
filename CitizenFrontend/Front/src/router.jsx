import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";
import KYCForm from "./views/KYCForm";
import KYCPage from "./views/KYCPage";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Contact from "./views/Contact";
import AboutUs from "./views/AboutUs";

const router = createBrowserRouter([

    {
        path:'/', element:<DefaultLayout/>,
        children:[
            {
                path:'/',
                element: <Navigate to="/users"/>
            },
            // {
            //     path:'/home',element:<Home/>
            // },
            
            {
                path:'/dashboard',element:<Dashboard/>
            },
            {
                path:'/users',element:<Users/>
            },
            {
                path:'/KYCForm',element:<KYCForm/>
            },
            {
                path:'/KYCPage',element:<KYCPage/>
            },
            {
                path:'/profile',element:<Profile/>
            },
        ]
    },    
    {
        path:'/', element:<GuestLayout/>,
        children:[
           
        {
            path:'/login',element:<Login/>
        },
        {
            path:'/signup',element:<SignUp/>
        },
        ]
    },
    
    {
      path:'/home',element:<Home/>
    },
    {
        path:'/contact',element:<Contact/>
      },
      {
        path:'/aboutus',element:<AboutUs/>
      },
    {
        path:'*', element:<NotFound/>
    }
    
])
export default router;