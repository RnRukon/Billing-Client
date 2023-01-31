import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLoginMutation, useRegisterMutation } from '../../Redux/Featurse/Users/UserApi/userApi';
import { setAccessTokenAndUser } from '../../Redux/Featurse/Users/UserSlice/UserSlice';
import { Alert } from '../Alert/Alert';

const Register = () => {
    const { register, handleSubmit, reset } = useForm();

    const [userRegister, { isLoading: userRegisterIsLoading }] = useRegisterMutation();


    const [userLogin, { isLoading: userLoginLoading }] = useLoginMutation();

    const dispatch = useDispatch();




    const handleSignUp = (data) => {

        userRegister(data)
            .then(async res => {
                if (res?.data?.result?.email) {

                    await userLogin({
                        userName: data?.userName,
                        password: data?.password,
                    })
                        .then(res => {
                            const token = res?.data?.result?.access_token || null;
                            const user = JSON.stringify(res?.data?.result?.user) || null;
                            localStorage.setItem('accessToken', token)
                            localStorage.setItem('user', user)
                            dispatch(setAccessTokenAndUser());
                            reset()
                            Alert({ title: 'Login Successfully', type: 'success' })
                        }).catch(err => {
                            Alert({ title: 'Server error', type: 'error' })
                        })
                }
            })

    }
    return (
        <div className=' w-80'>
            <h1 className='text-center text-lg text-slate-50 bg-slate-500 py-3 mb-4'>Register</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Full Name" required
                        {...register("name")}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                    <input type="userName" id="userName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="User Name" required
                        {...register("userName")}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Email" required
                        {...register("email")}
                    />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder='Password' required
                        {...register("password")}
                    />
                </div>


                {userRegisterIsLoading || userLoginLoading ?
                    <button className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Loading...</button> :
                    <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>

                }
            </form>
        </div>
    );
};

export default Register;