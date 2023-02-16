import { createBrowserRouter, } from "react-router-dom";
import Home from "../Components/Home/Home";
import NotFoundPage from "../Components/NoteFoundPage/NoteFoundPage";
import LoginLayout from "../Components/LoginLayout/LoginLayout";
import PrivateRoute from "./PrivetRoute";





export const routers = createBrowserRouter([
    {
        path: "/",
        element:
            <PrivateRoute>
                <Home />
            </PrivateRoute>


    },
    {
        path: "*",
        element:
            <PrivateRoute>
                <NotFoundPage />
            </PrivateRoute>


    },
    {
        path: "/login",
        element: <LoginLayout />
    },


]);