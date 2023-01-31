import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useLoginMutation } from '../../Redux/Featurse/Users/UserApi/userApi';
import { setAccessTokenAndUser } from '../../Redux/Featurse/Users/UserSlice/UserSlice';
import { Alert } from '../Alert/Alert';


const Login = () => {

    const { register, handleSubmit, reset } = useForm();
    const [userLogin] = useLoginMutation()
    const dispatch = useDispatch();


    const handleSignIn = (data) => {
        userLogin(data)
            .then(async res => {
                const token = res?.data?.result?.access_token || null;
                const user = JSON.stringify(res?.data?.result?.user) || null;
                localStorage.setItem('accessToken', token)
                localStorage.setItem('user', user)
                dispatch(setAccessTokenAndUser());
                reset()
                Alert({ title: 'Login Successfully', type: 'success' })
            })
    }

    return (
        <div className=' w-80'>
            <h1 className=' text-center text-lg text-slate-50 bg-slate-500 py-3 mb-4'>Login</h1>
            <form onSubmit={handleSubmit(handleSignIn)}>

                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your user Name</label>
                    <input type="userName" id="userName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="rukon.js" required
                        {...register("userName")}
                    />
                </div>

                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder='Password' required
                        {...register("password")}
                    />
                </div>

                <div className=' flex justify-end'>
                    <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                </div>

            </form>
        </div>
    );
};

export default Login;