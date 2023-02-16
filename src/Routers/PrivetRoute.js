import React from "react";
import { useSelector } from "react-redux";
import LoginLayout from "../Components/LoginLayout/LoginLayout";
import { useGetMeQuery } from "../Redux/Featurse/Users/UserApi/userApi";



const PrivateRoute = ({ children }) => {

    const users = useSelector(sate => sate?.users);


    const { data, isLoading } = useGetMeQuery(users?.user?.email);
  


    if (isLoading) {
        return <div className=" w-screen h-screen flex justify-center items-center text-slate-50">
            <p>Loading...</p>
        </div>
    }
    if (!data?.result?.email) {
        return <LoginLayout />
    } else {

        return children;
    }




};

export default PrivateRoute;