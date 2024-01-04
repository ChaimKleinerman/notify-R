import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import React from "react";
import ErrorPage from "./ErrorPage";  
import Home from "../pages/Home"; 
import Login from "../../users/pages/Login";
import TaskDetails from "../../tasks/pages/TaskDetails";
import Register from "../../users/pages/Register";
import Tasks from "../../tasks/pages/Tasks";

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
        <Register/>
                </>
            ),
        },
        {
            path:'/taskDetails',
            element:(
                <>
                  <TaskDetails/>
                </>
              
            ),
        },
        {
            path:'/tasks',
            element:(
                <>
                  <Tasks/>
                </>
              
            ),
        }
        
    ]);
    return <RouterProvider router={router} />;
}