import { createBrowserRouter } from "react-router-dom";
import LoginPage, { loginAction } from "./pages/LoginPage";
import RegisterPage, { registerAction } from "./pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-3xl bg-red-300 font-bold underline">Hello world!</div>,
    },
    {
        path: '/register',
        element: <RegisterPage />,
        action: registerAction
    },
    {
        path: '/login',
        element: <LoginPage />,
        action: loginAction
    },
]);

export default router;