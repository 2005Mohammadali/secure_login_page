// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-3xl bg-red-300 font-bold underline">Hello world!</div>,
    },
    {
        path: '/register',
        element: <div className="text-3xl bg-green-300 font-bold underline">Register page</div>,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
]);

export default router;