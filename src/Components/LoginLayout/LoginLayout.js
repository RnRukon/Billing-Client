import React, { useState } from 'react';
import Register from '../Login/Register';

import Login from '../Login/Login';
const LoginLayout = () => {
    const [toggle, setToggle] = useState(false);
    return (

        <div className=' h-screen w-screen  container mx-auto flex  justify-center items-center'>
            <div className=' text-slate-50 '>
                {toggle ? <Register /> :
                    <Login />}

                <div className=' mt-5'>
                    {toggle ? <span>Are you already please login</span> : <span>Are you New user please register </span>}  <input type="checkbox" onClick={() => setToggle(!toggle)} className=' ' name="" id="" />
                </div>
            </div>
        </div>

    );
};

export default LoginLayout;