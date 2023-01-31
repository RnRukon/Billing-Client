import { createBrowserRouter, } from "react-router-dom";
import Home from "../Components/Home/Home";
import PrivateRoute from "./PrivetRoute";





export const routers = createBrowserRouter([
    {
        path: "/",
        element:
            <PrivateRoute>
                <Home />
            </PrivateRoute>


    },


]);