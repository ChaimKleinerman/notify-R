import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import React from "react";
import ErrorPage from "./ErrorPage";  
import Home from "../pages/Home"; 
import Login from "../../users/pages/LoginPage";
import RegisterPage from "../../users/pages/RegisterPage";

export default function Routs() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Home />
                </>
            ),
            errorElement: <ErrorPage />,
        },{
            path:'/login',
            element:(
                <>
                <Login/>
                </>
            ),
            errorElement: <ErrorPage />,

        },{
            path:'/register',
            element:(
                <>
        <RegisterPage/>
                </>
            ),
        }
        
    ]);
    return <RouterProvider router={router} />;
}